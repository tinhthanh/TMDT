export const navigation2 = [
    {
      name: 'Manager',
      url: '/admin/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Role Admin'
    },
    {
      name: 'Khoa hoc',
      url: '/admin/khoa-hoc',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'view',
          url: '/admin/khoa-hoc/view',
          icon: 'icon-puzzle'
        },
        {
          name: 'view-details',
          url: '/admin/khoa-hoc/view-details/1234',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Components',
      url: '/admin/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'my demo',
          url: '/admin/components/mydemo',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/admin/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Pages',
      url: '/admin/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/admin/pages/login',
          icon: 'icon-star'
        },
        {
          name: '/Register',
          url: '/admin/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/admin/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/admin/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ];