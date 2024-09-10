import './App.css';

function App() {
  return (
    <div className="App" class='bg-red-100  items-center flex justify-center '>
      <div class="w-3/4 bg-white h-full rounded-lg p-4 my-16 ">
        {/* image container */}
        <div >
          {/* image */}
          <img alt='' src='src/assets/images/image-omelette.jpeg' class='w-50 h-25' />
        </div>
        {/* headline container */}
        <h1 className="font-serif font-bold my-3 text-xl">
          Simple Omelette Recipe
        </h1>
        {/* description */}
        <p className=' '>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally
          filled with your choice of cheese, vegetables, or meats
        </p>
        {/* preparation */}
        <div className='w-50 h-25 border-2 bg-red-100 rounded-md p-3 my-5'>
          <p className='text-purple-800 font-outfit font-bold mb-2'>Preparation time </p>
          <div className='mx-6'>
            <ul className='list-disc'>
              <li> <p><span className='font-bold'>Total: </span>Approximately 10 minutes </p>  </li>
              <li> <p><span className='font-bold'>Preparation: </span>5 minutes</p>  </li>
              <li> <p><span className='font-bold'>Cooking: </span>5 minutes</p>  </li>
            </ul>
          </div>

        </div>
        {/* ingredients */}
        <div>
          <h1 className='text-red-800 font-bold font-serif text-2xl'>Ingredients</h1>
          <div className='mx-6'>
            <ul className='list-disc my-3'>
              <li className='my-2'>
                2-3 large eggs Salt, to taste Pepper
              </li>
              <li className='my-2'>
                1 tablespoon of butter or oil
              </li>
              <li className='my-2'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

        </div>
        <hr className='my-5'/>
        {/* instructions */}
        <div>
          <h1 className='text-red-800 font-bold font-serif text-2xl'>Ingredients</h1>
          <div className='mx-6'>
            <ol className='list-decimal '>
              <li className='my-3' >
                <p><span className='font-bold'>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture </p>


              </li>
              <li className='my-2'>
                <p>
                  <span className='font-bold'>Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.
                </p>
              </li>
              <li className='my-2' >
                <p> <span className='font-bold'>
                  Cook the omelette:
                </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. </p>
              </li>
              <li className='my-2' >
                <p> <span className='font-bold'>
                  Add fillings (optional):
                </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. </p>
              </li>
              <li className='my-2' >
                <p> <span className='font-bold'>
                  Fold and serve:
                </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>
              </li>
              <li className='my-2' >
                <p> <span className='font-bold'>
                  Enjoy:                </span>Serve hot, with additional salt and pepper if needed.</p>
              </li>
            </ol>
          </div>
          <hr className='my-5'/>
          <div>
          <h1 className='text-red-800 font-bold font-serif text-2xl'>Nutrition</h1>
          <p>
          The table below shows nutritional values per serving without the additional fillings.
          </p>
          <div class="grid grid-rows-4 grid-flow-col gap-4 grid-cols-2">
  <div className='mt-5 justify-center items-center mx-10 '>
    <div className='flex justify-between'>
      <p>Calories</p>
      <p>277kcal</p>
    </div>    <hr className='my-4 w-fit'/>
    <div className='flex justify-between'>
      <p>Carbs</p>
      <p>0g</p>
    </div>    <hr className='my-4'/>
    <div className='flex justify-between'>
      <p>Protien</p>
      <p>20g</p>
    </div>    <hr className='my-4'/>
    <div className='flex justify-between'>
      <p>Fat</p>
      <p>22g</p>
    </div>    <hr className='my-4'/>
    {/* <p >Calories <span className='ml-20' >277kcal</span></p>
    <p>Carbs <span className='mr-6'>0g</span></p>
    <hr className='my-4'/>
    <p>Protien <span>20g</span></p>
    <hr className='my-4'/>
    <p>Fat <span>22g</span></p> */}
     </div>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
