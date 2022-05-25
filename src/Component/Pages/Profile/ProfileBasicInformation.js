import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {} from '../../../img/index';
import '../../../Component/Sass/Pages/Profile.scss';
import '../../../Component/Sass/Pages/BasicInfo.scss';
import '../../../Component/Sass/Pages/EditBasicInfo.scss';


 const ProfileBasicInformation = () => {

    return (
        <>
            <div className='OwnProfile'>
                <span className='back1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </span>

                {/* Basic Info */}

                <h3 className='heading1'>Edit profile</h3>
                <div className='links'>
                <Link type='submit' to='/#'> Update </Link>
                </div>
                <div className='Buttons'>
                    <Button type='submit' href='/#'>Basic Info</Button> 
                    <Button type='submit' href='/#'>Personal Info</Button> 
                    <Button type='submit' href='/#'>Profile Picture</Button>
                </div>  
            </div>
        </>
    );
};
export default ProfileBasicInformation;