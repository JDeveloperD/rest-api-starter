// @ts-check

function single (resource, authUser) {
  return {
    id: resource._id,
    nikname: resource.nikname,
    email: resource.email,
    avatar: resource.avatar,
    links: []
  }
}

function multiple (resources, authUser) {
  return resources.map(resource => single(resource))
}

export {
  single,
  multiple
}
