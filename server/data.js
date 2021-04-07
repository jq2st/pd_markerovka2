const ROLES = {
    GUEST: 'guest',
    USER: 'user',
    ADMIN: 'admin',
}

module.exports = {
    ROLES: ROLES,
    users: [
        {userId: 1, role: ROLES.ADMIN},
        {userId: 2, name: 'alice', role: ROLES.USER},
        {userId: 3, name: 'andrew', role: ROLES.USER},
    ],
}