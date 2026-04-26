const WISHLIST_KEY = 'titan_wishlist'

const loadWishlist = () => {
  try {
    const raw = window.localStorage.getItem(WISHLIST_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const saveWishlist = (items) => {
  window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(items))
}

export const getWishlistItems = () => loadWishlist()

export const addToWishlist = (watch) => {
  const items = loadWishlist()
  const baseId = watch.id ?? watch.sku ?? watch.title
  const id = watch.imageSrc ? `${baseId}-${watch.imageSrc}` : baseId

  if (!items.find((item) => item.id === id)) {
    items.push({
      id,
      routeId: baseId,
      baseId,
      imageSrc: watch.imageSrc,
      title: watch.title,
      description: watch.description,
      price: watch.price,
      rating: watch.rating
    })
  }

  saveWishlist(items)
  return items
}

export const removeFromWishlist = (id) => {
  const items = loadWishlist().filter((item) => item.id !== id)
  saveWishlist(items)
  return items
}

export const isWishlisted = (id) => {
  const items = loadWishlist()
  return items.some((item) => item.id === id)
}
