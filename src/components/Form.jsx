import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from './Form.module.css'
import Button from "./Button";
import ClipLoader from "react-spinners/ClipLoader";
import { getFile } from "../utils/fetch";
import LoadingMessage from "./LoadingMessage";

export default function Form() {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)



    // Form Validation
    const includesHttp = (value.includes('https://') || !value == '' && value.includes('http://'))
    const urlInvalid = !value == '' && !includesHttp


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (value == '') {
            setError('Cannot Submit Empty URL')
            setIsSubmitting(false)

        } else if (urlInvalid) {

            setError('Cannot Submit Invalid URL')

        } else {

            setIsSubmitting(true)
            const data = new FormData(e.target)

            const url = data.get('url')
            const format = data.get('format')

            const blob = await getFile(format, url).then(()=>{

                setIsSubmitting(false)
                setValue('')

            }).catch((err) => {

                setIsSubmitting(false)
                setError('Error connecting to server...')

            })

          
        }


    }

    const handleChange = (e) => {
        setError(false)
        setValue(e.target.value)
        console.log(value)
    }


    const handleBlur = (e) => {


    }

    return (


        <form className={classes['main']} onSubmit={handleSubmit}>


            {!isSubmitting ? <><div className={classes['input-container']}>

                <label className={classes['label']} htmlFor="format">File Type:</label>
                <motion.select className={classes['select']} name="format" id="format" initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1 }}>

                    <option className={classes['option']} value="screenshot">Screenshot (PNG)</option>
                    <option className={classes['option']} value="pdf" selected>PDF</option>


                </motion.select>

            </div>


                <div className={classes['input-container']}>

                    <label className={classes['label']} htmlFor="url">URL: </label>

                    {/* URL INPUT */}
                    <input className={classes['input']} type="text" name="url" placeholder="example: https://website.com" value={value} onChange={handleChange} />

                </div>

                <AnimatePresence>
                    {/* ERROR MESSAGES */}
                    {urlInvalid && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className={classes['error']}>Invalid URL</motion.p>}
                    {error && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className={classes['error']}>{error}</motion.p>}
                </AnimatePresence>



                <Button color='white' background='rgb(129, 81, 255)' width='200' height='65' transition='0.2s ease-in-out' hover='background-color:#a07cfc;' >Submit</Button></> : <><ClipLoader className={classes['spinner']}
                    color='purple'
                    loading='false'

                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /><LoadingMessage></LoadingMessage>
            </>}










        </form>
    )


}