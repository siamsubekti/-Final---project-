export const menus = {
    'admin': [
        {
            label: 'Dashboard',
            route: 'dashboard-admin'
        },
        {
            label: 'Form Users',
            route: 'add-user'
        },
        {
            label: 'Data Table Users',
            route: 'list-user'
        },
        {
            label: 'Data Table Transactions',
            route: 'list-transaction'
        }
    ],
    'post operator': [
        {
            label: 'Form Transactions',
            route: 'add-transaction'
        },
        {
            label: 'Data Table Transactions',
            route: 'list-transaction'
        }
    ]
}

export default menus;
