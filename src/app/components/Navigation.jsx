import Link from 'next/link'
const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route: 'about'
  },
  {
    label: "Dealer",
    route: 'dealer'
  }
]
export default function Navigation() {
    return (

        <header>
            <nav>
            <ul>
                { links.map(({label, route }) => (
                <>  <li key={route} >
                        <Link
                            href={route}>
                            {label}
                            
                        </Link>
                    </li>  
                </>
                )) }
            </ul>
            </nav>
        </header>

    );
}
