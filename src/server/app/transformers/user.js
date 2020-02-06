export default ( n ) => {
  return {
    id: n.id,
    fullname: n.fullname,
    username: n.username,
    avatar: n.avatars,
    email: n.email,
    roles: n.roles,
    first_use: n.first_use || 0,
    is_suspend: n.is_suspend
    // avatar: n.avatar,
  }
}
