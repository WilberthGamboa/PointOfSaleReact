import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {
    const navigate = useNavigate();
    const items: MenuItem[] = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => {
            navigate('/');
          }
      },
      {
          label: 'Features',
          icon: 'pi pi-star',
          command: () => {
            navigate('/ventas');
        }
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Components',
                  icon: 'pi pi-bolt'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil'
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope'
      }
  ];
  return (
    <Menubar model={items} />
  )
}
