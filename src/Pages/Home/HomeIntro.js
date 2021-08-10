import './HomeIntro.css';

export default function HomeIntro(){

    return(
        <>
        <div className='homeIntro-container'>
            <div className='homeIntro-image-wrapper'>
                <figure className='homeIntro-image-figure'>
                    <img className='homeIntro-image'src='images/frontpage_potrett.jpeg' alt=''/>
                </figure>
            </div>
            <div className='homeIntro-info'>
                <h1 className='homeIntro-title'> Gry Miriam Olsen</h1>
                <p className='homeIntro-text'> Experienced Chief Executive Officer with a demonstrated history of working in the transportation/trucking/railroad industry. Skilled in Operations Management, Procurement, Strategic Planning, ITIL, and Supply Chain Management. Strong business development professional with a Bachelor of logistics focused in Finance, Administration and Logistics from Høgskolen i Bergen (HiB).</p>

            </div>
        </div>
        </>
    );
}