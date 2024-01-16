import { useRef, useState } from "react";
import classNames from "classnames";
import Excel from "./Excel";
import Logo from "./Logo";
import Body from "./Body";
import Button from "./Button";
import Suggest from "./Suggest";
import FormInput from "./FormInput";
import Form from "./Form";
import Rating from "./Rating";
import Actions from "./Actions";
import Dialog from "./Dialog";
import Header from "./Header";

import schema from "../config/schema";

function Discovery() {
  const form = useRef();
  return (
    <div className="Discovery">
      <h2>Logo</h2>
      <div style={{ background: "#f6f6f6", display: "inline-block" }}></div>
      <Logo />

      <h2>Header</h2>
      <Header />

      <h2>Body</h2>
      <Body> I am body</Body>

      <Actions onAction={(type) => alert(type)} />

      <Form
        ref={form}
        fields={{
          retame: { label: "Rating", type: "rating" },
          freetext: { label: "Greetings" },
        }}
        initialData={{ rateme: 4, freetext: "Hello" }}
      />
      <Button>
        onClick=
        {() => {
          const data = {};
          Array.from(form.current).forEach(
            (input) => (data[input.id] = input.value)
          );
          alert(JSON.stringify(data));
        }}
        Submit
      </Button>

      <h2>Form onputs</h2>
      <table className="Discovery-pad">
        <tbody>
          <tr>
            <td>Vanilla input</td>
            <td>
              <FormInput />
            </td>
          </tr>
          <tr>
            <td>Prefilled</td>
            <td>
              <FormInput defaultVaue="with a default" />
            </td>
          </tr>
          <tr>
            <td>Year</td>
            <td>
              <FormInput type="year" defaultValue="10" />
            </td>
          </tr>
          <td>Suggest</td>
          <td>
            <FormInput
              type="suggest"
              options={["red", "green", "blue"]}
              defaultValue="green"
            />
          </td>
          <tr>
            <td>Vanilla textarea</td>
            <td>
              <FormInput type="textarea" />
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Button</h2>
      <p>
        Button with Click:{" "}
        <Button onClick={() => alert("ouch")}> Click me</Button>
      </p>
      <p>
        A link: <Button href="https//reactjs.org/">Follow me</Button>
      </p>
      <p>
        Custom class name:{" "}
        <Button className="Discovery-custom-button"> I do nothing</Button>
      </p>

      <h2>Suggest</h2>
      <p>
        {" "}
        <Suggest options={["first", "second", "third"]} />
      </p>

      <h2>Dialog</h2>
      <DialogExample />

      <h2>Excel</h2>
      <Excel
        schema={schema}
        initialData={schema.name.samples.map((_, idx) => {
          const element = {};
          for (let key in schema) {
            element[key] = schema[key].samples[idx];
          }
          return element;
        })}
        onDataChange={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}

function DialogExample() {
  const [example, setExample] = useState(null);
  return (
    <>
      <p>
        <Button onClick={() => setExample(1)}>Example 1</Button>{" "}
        <Button onClick={() => setExample(2)}>Example 2</Button>
      </p>
      {example === 1 ? (
        <Dialog
          modal
          header="Out-of-the-box example"
          onAction={(type) => {
            alert(type);
            setExample(null);
          }}
        >
          Hello, dialog!
        </Dialog>
      ) : null}

      {example === 2 ? (
        <Dialog
          header="Not modal, custom dismiss button"
          hasCancel={false}
          confirmLabel="Whatever"
          onAction={(type) => {
            alert(type);
            setExample(null);
          }}
        >
          Anything goes here, like a <Button>a button</Button> for example
        </Dialog>
      ) : null}
    </>
  );
}
export default Discovery;
