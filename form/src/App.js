import React from 'react';
import './App.css';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from './components/ui/button';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
} from './Form';

function App() {
  // Initialize the form methods
  const methods = useForm();

  return (
    <div className="App">
      {/* Provide the form methods to the FormProvider */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => console.log(data))}>
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl {...field} />
                <FormDescription>Enter your name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl {...field} />
                <FormDescription>Enter a description.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl {...field} />
                <FormDescription>Enter your role.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
