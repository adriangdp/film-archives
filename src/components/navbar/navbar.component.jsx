import LoginButton from './user-button/login-button.component';
import UserToggle from './user-button/user-toggle.component';
import NavBarLink from './navbar-link.component';

const NavBar = ({user}) =>{
    return(
            <div className={`
                h-14
                px-0               
                bg-primary
                flex
                items-center
                justify-between
                md:justify-start
                gap-3
                md:gap-6
                text-secondary     
                `                
            }> 
                <div className='flex justify-start grow-1'>
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
                </div>  
                           
                <UserToggle />
            </div>
    );
}

export default NavBar