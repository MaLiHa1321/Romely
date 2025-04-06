import { Link } from 'react-router-dom';
import backimg from '../../assets/sundorbon.png';

const BannerNext = () => {
    return (
        <div>
             <div
                  className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-cover bg-center"
                  style={{ backgroundImage: `url(${backimg})` }} // set this to a general bg image if needed
                >
                  {/* Left Text Content */}
                  <div className="text-white max-w-lg">
                  <h1 className="text-5xl font-bold mb-4">Cox's Bazar</h1>
                    <p className="mb-6">
                    Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                  
                  </div>
            
                  {/* Right Swiper */}
                  <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Origin</label>
          <input type="text" className="input" placeholder="Dhaka" />
          <label className="fieldset-label">Destination</label>
          <input type="text" className="input" placeholder="Cox’s Bazar" />
          <div className='flex justify-between'>
          <label className="fieldset-label">From</label>
          <label className="fieldset-label">To</label>
          </div>
          <div  className='flex gap-2'>

          <input type="date" className="input validator" required placeholder="Pick a date in 2025" 
min="2025-01-01" max="2025-12-31"
  title="Must be valid URL" />
<p className="validator-hint">Must be 2025</p>
<input type="date" className="input validator" required placeholder="Pick a date in 2025" 
min="2025-01-01" max="2025-12-31"
  title="Must be valid URL" />
<p className="validator-hint">Must be 2025</p>
          </div>
          <div className="btn bg-yellow-500 border-none text-black hover:bg-yellow-600">

          <Link to='/login'>
          <button>Login</button>
          </Link>
          </div>
        </fieldset>
      </div>
    </div>
                  </div>
                </div>
        </div>
    );
};

export default BannerNext;