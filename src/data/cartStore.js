const CART_KEY = 'titan_cart'

export const parsePrice = (price) => {
  if (typeof price === 'number') {
    return price
  }
  const numeric = String(price || '')
    .replace(/[^0-9.]/g, '')
    .trim()
  const value = Number.parseFloat(numeric)
  return Number.isNaN(value) ? 0 : value
}

const loadCart = () => {
  try {
    const raw = window.localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const saveCart = (items) => {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const getCartItems = () => loadCart()

export const addToCart = (watch) => {
  const items = loadCart()
  const baseId = watch.id ?? watch.sku ?? watch.title
  const id = watch.imageSrc ? `${baseId}-${watch.imageSrc}` : baseId
  const existing = items.find((item) => item.id === id)

  if (existing) {
    existing.quantity += 1
  } else {
    items.push({
      id,
      imageSrc: watch.imageSrc,
      title: watch.title,
      description: watch.description,
      price: watch.price,
      quantity: 1,
      selected: true
    })
  }

  saveCart(items)
  return items
}

export const updateQuantity = (id, quantity) => {
  const items = loadCart()
  const target = items.find((item) => item.id === id)

  if (target) {
    target.quantity = Math.max(1, quantity)
  }

  saveCart(items)
  return items
}

export const toggleSelected = (id) => {
  const items = loadCart()
  const target = items.find((item) => item.id === id)

  if (target) {
    target.selected = !target.selected
  }

  saveCart(items)
  return items
}

export const removeItem = (id) => {
  const items = loadCart().filter((item) => item.id !== id)
  saveCart(items)
  return items
}

export const calculateTotals = (items) => {
  const selectedItems = items.filter((item) => item.selected)
  const selectedCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = selectedItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity
  }, 0)

  return {
    selectedCount,
    totalPrice
  }
}

export const formatPrice = (value) => `₹ ${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
