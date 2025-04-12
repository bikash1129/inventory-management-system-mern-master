import { ErrorMessage, Field, Formik } from 'formik'
import { Button } from 'primereact/button'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useLoginUserMutation } from '../provider/queries/Auth.query'
import { toast } from 'sonner'
import ReCAPTCHA from "react-google-recaptcha"

const Login = () => {
  const [LoginUser, LoginUserResponse] = useLoginUserMutation()
  const navigate = useNavigate()

  type User = {
    token: string
    email: string
    password: string
  }

  const RecaptchaRef = useRef<any>()

  const initialValues: User = {
    token: '',
    email: '',
    password: ''
  }

  const validationSchema = yup.object({
    email: yup.string().email("Email must be valid").required("Email is required"),
    password: yup.string().min(5, "Password must be greater than 5 characters").required("Password is required"),
  })

  const OnSubmitHandler = async (e: User, { resetForm }: any) => {
    try {
      const { data, error }: any = await LoginUser(e)
      if (error) {
        toast.error(error.data.message)
        return
      }

      localStorage.setItem("token", data.token)
      resetForm()
      navigate("/")
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      RecaptchaRef.current.reset()
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left - Image/Brand */}
        <div className="hidden lg:flex w-1/2 bg-blue-400 justify-center items-center p-10">
          <img src="../public/frontimage.png" alt="Login Visual" className="w-full max-w-sm" />
        </div>

        {/* Right - Login Form */}
        <div className="w-full lg:w-1/2 px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>
            {({ values, setFieldValue, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="font-medium">Email</label>
                  <Field id="email" name="email" placeholder="Enter your email" className="mt-1 block w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="password" className="font-medium">Password</label>
                  <Field id="password" name="password" type="password" placeholder="Enter your password" className="mt-1 block w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                  <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <ReCAPTCHA
                    ref={RecaptchaRef}
                    sitekey={import.meta.env.VITE_SITE_KEY}
                    onChange={(e) => setFieldValue('token', e)}
                  />
                </div>

                <Button
                  disabled={!values.token}
                  loading={LoginUserResponse.isLoading}
                  className="w-full bg-blue-400 text-white py-3 px-2 rounded-lg text-lg font-semibold flex items-center justify-center transition duration-300 hover:bg-red-600"
                >
                  Submit
                </Button>

                <div className="text-center text-sm text-gray-600 mt-4">
                  Don’t have an account?
                  <Link to="/register" className="text-red-500 font-medium ml-1">Register</Link>
                </div>

                
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
