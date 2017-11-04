export const navigation = [
  {
    name: ' Công cụ',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'UI elements'
  },
  {
    name: 'Components',
    url: '/admin/components',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Buttons',
        url: '/admin/components/buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Social Buttons',
        url: '/admin/components/social-buttons',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cards',
        url: '/admin/components/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/admin/components/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Modals',
        url: '/admin/components/modals',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/admin/components/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/admin/components/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/admin/components/tabs',
        icon: 'icon-puzzle'
      }
      ,
      {
        name: 'my demo',
        url: '/admin/components/mydemo',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/admin/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Font Awesome',
        url: '/admin/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/admin/icons/simple-line-icons',
        icon: 'icon-star'
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
    name: 'Charts',
    url: '/admin/charts',
    icon: 'icon-pie-chart'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
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
        name: 'Register',
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
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
