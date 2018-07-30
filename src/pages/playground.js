import React from 'react'
import DSLeftNav from '../components/LeftNav'
import FooterMessage from '../components/FooterMessage'
import styled from 'styled-components'
import { DSButton, DSInputText, DSInputSelect, DSInputSearch, DSCheckbox, DSRadio, DSTextArea, DSSwitch, DSAvatar } from 'oskrhq-design-system';
import MichaelScottImg from './../assets/avatar-page/michael-scott.jpg'

const PlaygroundPageContent = styled.div` 
  max-width: 714px;
  padding: 120px 0 200px 60px;

  img { 
    float: left;
    margin: 32px;
  }
`

const Buttons = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 80px 0 120px 0;

  button {
    margin-left: 16px;
  }
`

const Form = styled.div` 
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .ds-switch-container {
    margin: 0 16px 16px 16px;
  }
`

const Radios = styled.div`
  padding: 32px;
`

const Checkboxes = styled.div`
  padding: 16px;
  .ds-checkbox-container {
    margin-bottom: 16px;
  }
`

const TwoParagraphs = styled.div` 
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
`

const SearchInput = styled.div` 
  margin-bottom: 96px;
`

const Playground = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">

      <PlaygroundPageContent>
        <h1>Lorem Ipsum Dolor Amet</h1>

        <DSAvatar src={MichaelScottImg} size="large" />

        <p>Lorem ipsum dolor amet pitchfork echo park art party, <a href="#">trust fund plaid direct trade chartreuse schlitz</a>. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>

        <p>Lorem ipsum dolor amet pitchfork echo park art party, <strong>trust fund plaid direct trade chartreuse schlitz</strong>. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy..</p>

        <p><i>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</i></p>

        <Buttons>
          <DSButton type="ghost" size="medium">Cancel</DSButton>
          <DSButton type="primary" size="medium">Save</DSButton>
        </Buttons>

        <h2>Lorem Ipsum Dolor Amet</h2>

        <p>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>

        <Form>
          <DSInputText label="First Name"></DSInputText>
          <DSInputText label="Last Name"></DSInputText>
          <DSInputSelect label="Marital Status" placeholder="Select">
            <option value="" selected>
              Choose...
              </option>
            <option value="">Single</option>
            <option value="">Married</option>
            <option value="">It's Complicated</option>
          </DSInputSelect>
          <Radios>
            <DSRadio
              checked
              name="radio"
              label="Checked"
            />
            <DSRadio
              name="radio"
              label="Unchecked"
            />
          </Radios>
          <div>
            <DSSwitch></DSSwitch>
          </div>
        </Form>

        <DSTextArea label="Comment (Optional)"></DSTextArea>
        <Checkboxes>
          <DSCheckbox
            name="checkboxA"
            labelText="This is a Checkbox"
            value="checkboxA"
          />
          <DSCheckbox
            name="checkboxB"
            labelText="Another Checkbox"
            value="checkboxB"
          />
          <DSCheckbox
            name="checkboxB"
            labelText="Ane yet another one"
            value="checkboxB"
          />
          <DSCheckbox
            name="checkboxB"
            labelText="But wait... there is more"
            value="checkboxB"
          />
        </Checkboxes>

        <SearchInput>
          <DSInputSearch placeholder="Search..."></DSInputSearch>
        </SearchInput>

        <h3>Lorem Ipsum Dolor Amet</h3>

        <p>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>

        <TwoParagraphs>
          <p>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>

          <p>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>
        </TwoParagraphs>

        <h4>Lorem Ipsum Dolor Amet</h4>

        <p>Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>

        <TwoParagraphs>
          <div>
            <h4 className="ds-overline-text-style">Lorem Ipsum Dolor Amet</h4>

            <p className="ds-caption-text-style">Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>
          </div>
          <div>
            <h4 className="ds-overline-text-style">Lorem Ipsum Dolor Amet</h4>

            <p className="ds-caption-text-style">Lorem ipsum dolor amet pitchfork echo park art party, trust fund plaid direct trade chartreuse schlitz. Paleo portland listicle +1 schlitz af tbh cardigan. Celiac +1 lyft la croix, tofu taxidermy thundercats schlitz. Jianbing kale chips poutine, microdosing church-key kogi sriracha tattooed fashion axe. Gluten-free retro seitan chartreuse taxidermy.</p>
          </div>
        </TwoParagraphs>


      </PlaygroundPageContent>

      <FooterMessage />

    </div>
  </div >
)

export default Playground
