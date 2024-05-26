import  React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { Note } from '../model/NoteModel';
import { Formik } from 'formik';
import * as Yup from "yup";

interface ICreateNoteProps {
    notes:Note[];
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>;
}


const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({notes,setNotes}) => {
    // const [error,setError] = useState<string>("");
    const titleRef = useRef<HTMLInputElement|null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    // const colorRef = useRef<HTMLInputElement|null>(null);

    // const handleSubmit = (e:React.FormEvent): void => {
    //     e.preventDefault();

    //     if(titleRef.current?.value ==="" || textRef.current?.value==="" ){
    //         return setError("All fields are mandatory");
    //     }

    //     setError("");

    //     setNotes([...notes,{
            // id:(new Date()).toString(),
            // title:(titleRef.current as HTMLInputElement).value,
            // text:(textRef.current as HTMLTextAreaElement).value,
            // color:(colorRef.current as HTMLInputElement).value,
            // date:(new Date()).toString()
    //     }]);

        // (titleRef.current as HTMLInputElement).value="";
        // (textRef.current as HTMLTextAreaElement).value="";

    // }
    const validSchema = Yup.object().shape({
        title:Yup.string().required('Required'),
        text:Yup.string().required('Required'),
        color:Yup.string().required('Required'),
    });
    return (


        <>
            <h2>Create Notes</h2>
            {/* {error && <Alert variant='danger'>{error}</Alert>} */}
            <Formik initialValues={{
                title:"",
                text:"",
                color:"#dfdfdf",
            }}
            onSubmit={(values) => {setNotes([...notes,{
                id:(new Date()).toString(),
                title:values.title,
                text:values.text,
                color:values.color,
                date:(new Date()).toString()
                
            }]);
                values.text="";
                values.title="";
                values.color="#dfdfdf";
            }}

            validationSchema={validSchema}
            >
            {({handleSubmit,values,handleChange,touched,errors}) => (
                                <Form className='mb-3 mt-3' onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='formBasicTitle'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control ref={titleRef} type='text' placeholder='Enter Title for the Note' name='title' value={values.title} onChange={handleChange}/>
                                    {touched.title && errors.title && <Alert variant='danger'>{errors.title}</Alert>}
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formBasicText'>
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control ref={textRef} type='text' placeholder='Enter the Note' name='text' value={values.text} onChange={handleChange} as="textarea" rows={3}/>
                                    {touched.text && errors.text && <Alert variant='danger'>{errors.text}</Alert>}
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                                    <Form.Control type='color' name='color' value={values.color} onChange={handleChange} id='colorInput' defaultValue="#dfdfdf" title='Choose Your Color'/>
                                </Form.Group>
                                <Button type='submit' variant='primary'>Submit</Button>
                            </Form>
            
            )}
            </Formik>
        </>
    );
};

export default CreateNote;
