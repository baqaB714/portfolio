import React from 'react';

const NavBar = () => {
    return (
        <section>
            <div className='bg-slate-900  w-1/5 h-screen'>
                <div id='avatarSection' className='jus'>
                    <img src="/assets/img/my-profile-img.jpg" className='w-2/5' alt="" />
                    <h3 className='text-white'>Abbas Bassaki</h3>
                </div>
            </div>
        </section>
    );
}

export default NavBar;
