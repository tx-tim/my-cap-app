# my-cap-app

I've set up jest with `mockIonicReact` from `'@ionic/react-test-utils'` according to ionic's blog post here: https://ionicframework.com/blog/testing-ionic-react-apps-with-jest-and-react-testing-library/

Also set up react-hook-form with `require("mutationobserver-shim")` according to the docs here: https://react-hook-form.com/faqs#question9

The form is self contained to demonstrate issues with firing events using `fireEvent` from `@testing-library/react` and the ionic teams's solution with `ionFireEvent` from `@ionic/react-test-utils`;

The component under test is `IonicHookForm` found in `src/components`.  The form has 3 simple text inputs for first, middle, and last name; notice the placement of the testId attribute for `lastName`: unlike `firstname` and `middlename` where the testId is on the `IonInput`, `lastName` places it on the `Controller` component from `react-hook-form`.  


