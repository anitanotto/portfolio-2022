import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://github.com/anitanotto" target="blank" rel="noreferrer"><div>
                <VscGithub />
            </div></a>
            <a href="https://linkedin.com/in/anitanotto" target="blank" rel="noreferrer"><div>
                <FaLinkedinIn />
            </div></a>
            <a href="https://twitter.com/anitanotto" target="blank" rel="noreferrer"><div>
                <BsTwitter />
            </div></a>
        </div>
    )
}

export default SocialMedia
