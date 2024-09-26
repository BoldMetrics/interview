import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProfile, loadProfile, setProfileId } from '../actions/profileActions';
import axios from 'axios';
import {FormContainer, FormGroup, Label, Input, Button, IdContainer, ProfileDataCard, CardTitle, CardText, Section, ButtonContainer} from '../global/styledComponents'

const ProfileForm = () => {
  const dispatch = useDispatch();
  const profileId = useSelector((state) => state.profile.profileId);
  const profileData = useSelector((state) => state.profile.profileData);
  const isLoading = useSelector((state) => state.profile.isLoading);
  const error = useSelector((state) => state.profile.error); 
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [isLoadDisabled, setIsLoadDisabled] = useState(true);
  const [localProfile, setLocalProfile] = useState({
    height: '',
    weight: '',
    age: '',
    waist: '',
  });

  const [showProfileCard, setShowProfileCard] = useState(false);
  const ageInputRef = useRef(null);

  const handleChange = (e) => {

    const { name, value } = e.target;
    const roundedValue = Math.round(Number(value));
  
   
    let validationMessage = '';

    if (name === 'height') {
      if (roundedValue < 0 || roundedValue > 120) {
        validationMessage = "Height must be between 0 and 120 inches.";
      }
    } else if (name === 'weight') {
      if (roundedValue < 0 || roundedValue > 500) {
        validationMessage = "Weight must be between 0 and 500 pounds.";
      }
    } else if (name === 'age') {
      if (roundedValue < 0 || roundedValue > 120) {
        validationMessage = "Age must be between 0 and 120 years.";
      }
    } else if (name === 'waist') {
      if (roundedValue < 0 || roundedValue > 100) {
        validationMessage = "Waist must be between 0 and 100 inches.";
      }
    }

    if (validationMessage) {
      e.target.setCustomValidity(validationMessage);
    } else {
      e.target.setCustomValidity("");
    }

    setLocalProfile({
      ...localProfile,
      [e.target.name]: Math.round(Number(e.target.value)),
    });

    validationForm();
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setShowProfileCard(true);
    try {
      const response = await axios.post('http://localhost:3000/profile', localProfile);
      dispatch(saveProfile(response.data.profile));
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleLoad = async () => {
    setShowProfileCard(true);
    try {
      const response = await axios.get(`http://localhost:3000/profile/${profileId}`);
      dispatch(loadProfile(response.data));
    } catch (error) {
      dispatch({ type: 'LOAD_PROFILE_FAILURE', payload: error.response?.data?.message || 'Error loading profile' });
      console.error('Error loading profile:', error);
    }
  };

  const handleIdChange = (e) => {
    dispatch(setProfileId(e.target.value));
  };

  const handleClear = () => {
    setLocalProfile({
      height: '',
      weight: '',
      age: '',
      waist: '',
    });
    dispatch(setProfileId(''));
    setShowProfileCard(false);
  };

  const validationForm = () => {
    const { height, weight, age, waist } = localProfile;
    const isValid = height && weight && age && waist && 
      height >= 0 && height <= 120 &&
      weight >= 0 && weight <= 500 &&
      age >= 0 && age <= 120 &&
      waist >= 0 && waist <= 100;

    setIsSaveDisabled(!isValid);
    setIsLoadDisabled(!profileId);
  };

  useEffect(() => {
    validationForm();
  }, [localProfile, profileId]);

  return (
    <FormContainer onSubmit={handleSave}>
      <Section>
        <FormGroup>
          <Label htmlFor="height">Height (inches):</Label>
          <Input
            min="0"      
            max="500"    
            type="number"
            id="height"
            name="height"
            value={localProfile.height}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="weight">Weight (lbs):</Label>
          <Input
            min="0"      
            max="500"  
            type="number"
            id="weight"
            name="weight"
            value={localProfile.weight}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age (years):</Label>
          <Input
            ref={ageInputRef}
            min="0"      
            max="120"
            type="number"  
            id="age"
            name="age"
            value={localProfile.age}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="waist">Waist (inches):</Label>
          <Input
            min="0"      
            max="500"
            type="number"  
            id="waist"
            name="waist"
            value={localProfile.waist}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" disabled={isSaveDisabled}>Save Profile</Button>
      </Section>
      
      <Section>
        <IdContainer>
          <Label htmlFor="profileId">Profile ID:</Label>
          <Input
            type="number"
            min="0"      
            max="100000"
            id="profileId"
            value={profileId}
            onChange={handleIdChange}
          />
        </IdContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleLoad}  disabled={isLoadDisabled} >Load Profile</Button>
          <Button type="button" onClick={handleClear}>Clear Form</Button>
        </ButtonContainer>
      </Section>

      {isLoading ? (
        <p>Loading profile...</p>
      ) : showProfileCard && (
        <ProfileDataCard style={{
          backgroundColor: error ? '#ffcccc' : profileData ? '#ccffcc' : 'white',
          color: 'black',
          borderColor: error ? 'red' : 'green'
        }}>
          {error ? (
            <>
              <CardTitle style={{ color: 'red' }}>Error Loading Profile:</CardTitle>
              <CardText>{error}</CardText>
            </>
          ) : profileData ? (
            <>
              <CardTitle>Loaded Profile Data:</CardTitle>
              <CardText>Height: {profileData.height} inches</CardText>
              <CardText>Weight: {profileData.weight} lbs</CardText>
              <CardText>Age: {profileData.age} years</CardText>
              <CardText>Waist: {profileData.waist} inches</CardText>
            </>
          ) : null} 
        </ProfileDataCard>
      )}
    </FormContainer>
  );
};

export default ProfileForm;