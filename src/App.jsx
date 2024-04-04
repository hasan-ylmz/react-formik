import { Formik, Form, Field } from 'formik';
import './index.css'; // CSS dosyasını içe aktar

function App() {
  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          movies: [],
          character: '', // character alanını initialValues'e ekle
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >

        
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit} className="form-grid">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <label htmlFor="gender">Gender</label>
            <div className="gender-options">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
            <label>Movies</label>
            <div className="movie-options">
              <label>
                <Field type="checkbox" name="movies" value="Godfather" />
                Godfather
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="movies"
                  value="Scarface"
                />
                Scarface
              </label>
              <label>
                <Field type="checkbox" name="movies" value="Fight Club" />
                Fight Club
              </label>
            </div>
            <label htmlFor="character">Character</label>
            <Field as="select" name="character"> {/* Buradaki name özelliği character olarak düzeltildi */}
              <option value="Tony Montana">Tony Montana</option>
              <option value="Vito Corleone">Vito Corleone</option>
              <option value="Tyler Durden">Tyler Durden</option>
              <option value="Alberto">Alberto</option>
            </Field>
            
            <button type="submit">Submit</button>
            <code>{JSON.stringify(values)}</code>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;



/* import { Formik, Form, Field } from 'formik'

function App() {

  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender : '',
          movies :[],
          lesson:'Biology',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit , handleChange ,values}) =>
        (
          <form onSubmit={handleSubmit} >
            
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleChange} id="firstName" name="firstName" placeholder="Jane" />
            <br />
            
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} id="lastName" name="lastName" placeholder="Doe" />
            <br />
            
            <label htmlFor="email" style={{ marginRight: '37px' }}>Email</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <br />

            <label htmlFor="gender" style={{marginRight:'50px'}}>Gender</label>
            <span>Male</span>
            <input type='radio' name='gender' value="male" onChange={handleChange} />

            <span>Female</span>
            <input type='radio' name='gender' value="female" onChange={handleChange} />

            <br />
            <span >Godfather</span>
            <input  type="checkbox" name='movies' value='Godfather' onChange={handleChange}/>
            <br />

            <span>Lord Of the Rings</span>
            <input type="checkbox" name='movies' value='Lord Of the Rings' onChange={handleChange}/>
            <br />

            <span>Fight Club</span>
            <input type="checkbox" name='movies' value='Fight Club' onChange={handleChange}/>
            <br />


            <select name="lesson" id="lesson" onChange={handleChange} value={values.lesson}>
              <option value="Math">Math</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
            </select>
              <br />
              <br />
            <button type="submit">Submit</button>
          
          </form>
        )
        }
      </Formik>
    </>
  )
}

export default App
 */