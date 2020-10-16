import React, {  useState } from "react";
import { IonList, IonItem, IonLabel, IonText, IonInput, IonButton } from "@ionic/react";
import { useForm, Controller } from "react-hook-form";


export const initialUser = { 
  id: "01234",
  firstName: null,
  middleName: null,
  lastName: null,
  role: "staff",
}

type AccountEditNameFormProps = {};

export const AccountEditNameForm: React.FC<AccountEditNameFormProps> = () => {

  let [user, setUser] = useState(initialUser);
  const { firstName, middleName, lastName } = user;

  const updateUserProfile = (u: any) =>  {
    // doing this here locally; could also happen in a user context provider
    setUser(u);
    return Promise.resolve({ok:true, data: u});
  }
  
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { firstName, middleName, lastName },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: any) => {
    console.log("data onsubmit", data);
    if (data.firstName === user.firstName && data.lastName === user.lastName) {
      alert("nope")
      return;
    }
    let newUser = {
      ...user,
      ...data,
    };
    let response = await updateUserProfile(newUser);
    response.ok
      ? console.log("success")
      : alert("fail")
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <IonList className="margin-bottom-150">
        <IonItem lines="inset">
          <IonLabel position="stacked">
            First Name<IonText color="danger">*</IonText>
          </IonLabel>
          <Controller
            render={({ onChange, onBlur, value }) => (
              <IonInput
                onIonChange={onChange}
                onIonBlur={onBlur}
                value={value}
                type="text"
                data-testid="firstname-field"
              />
            )}
            name="firstName"
            control={control}
            defaultValue={firstName}
          />
        </IonItem>

        <IonItem lines="inset">
          <IonLabel position="stacked">
            Middle Name<IonText color="danger">*</IonText>
          </IonLabel>
          <Controller
            render={({ onChange, onBlur, value }) => (
              <IonInput
                onIonChange={onChange}
                onIonBlur={onBlur}
                value={value}
                type="text"
                data-testid="middlename-field"
              />
            )}
            name="middleName"
            control={control}
            defaultValue={middleName}
          />
        </IonItem>

        <IonItem lines="inset">
          <IonLabel position="stacked">
            Last Name<IonText color="danger">*</IonText>
          </IonLabel>
          <Controller
            render={({ onChange, onBlur, value }) => (
              <IonInput
                onIonChange={onChange}
                onIonBlur={onBlur}
                value={value}
                type="text"
              />
            )}
            name="lastName"
            control={control}
            defaultValue={lastName}
            data-testid="lastname-field"
          />
        </IonItem>
      </IonList>
      <div className="margin-bottom-150 ion-padding-horizontal">
        <IonButton expand="block" color="primary" type="submit" disabled={!formState.isValid}>
          Update
        </IonButton>
      </div>
    </form>
    <div>

      <ul>
        <li>{user.firstName}</li>
        <li>{user.middleName}</li>
        <li>{user.lastName}</li>
      </ul>
    </div>
    </>
  );
};

export default AccountEditNameForm;
