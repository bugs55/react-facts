import reactLogo from '../logo.svg';

export default function Header() {
    return(
        <header>
            <div className='siteTitle'>
                <img src={reactLogo} alt='React' />
                <h1>ReactFacts</h1>
            </div>
            <div className='siteDescription'>
                React Course - Project 1
            </div>
        </header>
    )
};