import LoginButton from './login-button.component';
import NavBarLink from './navbar-link.component';

const NavBar = ({user}) =>{
    return(
            <div className={`
                h-14
                px-0
                md:px-4                
                bg-secondary
                flex
                flex-grow-0
                items-center
                justify-between
                md:justify-start
                gap-3
                md:gap-6
                text-primary     
                `                
            }>   
                <NavBarLink to='/'>
                    Home
                </NavBarLink>         
                { 
                    user !== null &&
                    <NavBarLink to='/user/lists'>
                        Collections
                    </NavBarLink>  
                }
                <NavBarLink to='/about'>
                        About
                </NavBarLink>                  
                <LoginButton />

            </div>
    );
}

export default NavBar