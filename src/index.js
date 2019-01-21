import React, {Component} from 'react';
import { render } from 'react-dom';
import TopMenuLayout,{Title,Menu,Body} from './components/layouts/topmenu';
import {Card} from "./components/Cards";

// makes CSS available.  TODO: how users of this library should do it?
import link from './plum-defaults.scss';
import AboutPlum from "./docs/AboutPlum";
import CodeExample from "./components/CodeExample";

const root = document.getElementById('root');

render((
  <TopMenuLayout>
    <Title>A Posh Plum - Layouts</Title>
    <Menu>
      <img src="./aPoshPlum.svg" style={{height: "2em"}}/>
      <a href="#">Layouts</a>
    </Menu>

    <div className="columns">
      <div className="column col-4 col-xl-6 col-md-12 p-3">

        <p>A Posh Plum provides a <code>Layout</code> primitive that packages the
          "render props" or "named slots" pattern with a slightly <strike>different</strike> nicer style,
          making UI code easier to read, write and maintain. It works with React and React-Native.
        </p>

        <ul>
          <li>Less need for props tunneling</li>
          <li>Reduce inter-component chatter and call stacks as compared to "render props" pattern</li>
          <li>Help keep component props tiny and minimize syntactical nesting</li>
        </ul>

        <p>Plum includes some page-level semantic layouts and UI-widgets such as Cards that
          also use layouts. Plum also makes it easy for you to create your own layout components
          and improve your application's maintainability.
        </p>

        <h3>Using Plum Layouts</h3>

        <p>To use any Plum
          layout, use the layout's JSX tag and the JSX tags of the layout's named slots.
          Place any markup within these boundaries, and the layout is rendered just as
          you'd expect.
        </p>
        <CodeExample>
{`// import Card from 'plum/cards';

<Card>
  <Card.Icon>🔥</Card.Icon>
  <Card.Title>Urgent item</Card.Title>
  <Card.Label className="bg-error">Problems</Card.Label>

  <p className="text-error text-bold">
    An item needing prompt attention</p>
</Card>`}
        </CodeExample>

          <AboutPlum/>

      </div>

      <div className="column col-4 col-xl-6 col-md-12 p-3">
        <h4>Example Cards</h4>

        <p>Each card here is rendered with a Card layout. See the JSX
          example <span className="hide-md">on the left</span><span className="show-md">above</span> for sample input.

        </p>

        <Card className="active">
          <Card.Icon>❤️</Card.Icon>
          <Card.Title>An active card</Card.Title>
          <Card.Label>Super</Card.Label>

          <p>Card body paragraph and a <button className="btn btn-primary">Button</button></p>

          <Card.Footer>In the footer...</Card.Footer>
        </Card>
        <Card>
          <Card.Icon>🍭</Card.Icon>
          <Card.Title>Simple cards</Card.Title>
          <Card.Label className="bg-success">Sweet</Card.Label>
        </Card>
        <Card>
          <Card.Icon>⏱️</Card.Icon>
          <Card.Title>Waiting for response</Card.Title>
          <Card.Label>Pending</Card.Label>
          <Card.Footer>3 approvals pending from management team</Card.Footer>
        </Card>
        <Card>
          <Card.Icon>🔥</Card.Icon>
          <Card.Title>Urgent item</Card.Title>
          <Card.Label className="bg-error">Problems</Card.Label>
          <p className="text-error text-bold">An item needing prompt attention</p>
        </Card>
        <br/>

        <h4>How is my layout rendered?</h4>

        <p>A Layout is simply a component that places already-rendered semantic content into a JSX "envelope",
          merging content with layout markup. Its code just categorizes the semantic contents so they're
          all available for insertion to the layout's markup envelope. 💌️
        </p>

        <p>Plum's layouts reduce visual complexity of your code, making it easier to work on. You'll spend less time
          counting <code>{'<'}brackets and {'{'}braces{'}'} and {'{'}more braces{'}'} and brackets {'/>'}</code>.
        </p>

        <p>Check out React Devtools' view of the cards above, where you'll easily see the boundaries
          between layouts and slot content.
        </p>


        <p>Here's a sample Article's layout markup (see "Creating Plum
          Layouts"<span className="hide-xl">, on the right side, </span>
          <span className="show-xl">&nbsp;below </span> for the rest of the setup):</p>

        <CodeExample language="jsx">
{`<div>
  <h1>{slots.Heading}</h1>
  <div className="float-right text-italic">
    {slots.Author}
  </div>
  {slots.Subhead && <h2>
    {slots.Subhead}
  </h2>}

  {slots.Body}
     {/* ^^^^ default slot content goes here */}
</div>`}
        </CodeExample>


      </div>

      <div className="column col-4 col-xl-12 col-md-12 p-3">
        <h4>Creating Plum Layouts</h4>

        <p>Creating a layout is as easy as pie. 🥧 First, define your slots.
        </p>
        <CodeExample>{
`const Heading = Layout.namedSlot("Heading");
const Subhead = Layout.namedSlot("Subhead");
const Author = Layout.namedSlot("Author");
const Body = Layout.defaultSlot("Body");
`}</CodeExample>
        <p>
          Include a <code>defaultSlot</code> (here, thats the <code>Body</code> slot). Second, register the slots
          in a Layout, rendered the way you wish.</p>

        <CodeExample>
 {`class Article extends Layout {
  static slots = {Heading, Subhead, Author, Body};

  render() {
    // get instance-level slot content
    let slots = this.slots;  // these were already rendered

    {/* return your markup that lays out the slot content */}
  }
}
`}</CodeExample>

        <p>The layout is just a React component. Use hooks or component lifecycle methods as you like.
          In the render() method, <code>this.slots</code> contains the slotted content. Make sure
          you render all the slot content in any way making sense for your layout. </p>

        <p>
          See "How is my layout rendered?", <span className="hide-md">center column, </span>
          <span className="show-md">above,&nbsp; </span>
          for JSX that might fit the 🦆 bill here.
        </p>

        <p>You control the semantics of your layout, and you can extend it in any way that's helpful for you.
          Plum's <code>Layout</code> component simply 🗃️ organizes the slot content for you to place within
          the layout markup. You can add props, new slots or conditional rendering as needed.  See below for
          more advanced slot-rendering.
        </p>

        <h4>Reuse the Layout</h4>

        <CodeExample>
{`<Article>
  <Article.Title>React Tips</Article.Title>
  <Article.Author>Jimmy James</Article.Author>

  <p>Great article text</p>
  <p>More great article text</p>
</Article>
{/* 🛀 lather, rinse and repeat 🔁 */}

const {Title, Author} = Article;
<Article>
  <Title>Skinning a cat 🐈</Title>
  <Author>Sansato</Author>

  <p>There's more than one way to do it.</p>
</Article>
`}
        </CodeExample>
        <p>The paragraphs here are collected into the <code>defaultSlot</code> because they don't match any of the other
          slot types.
          Here, they'll render with the layout's <code>{`{slots.Body}`}</code>
          <span className="hide-xl">&nbsp;(see center column).</span>
          <span className="show-xl">&nbsp;(see "How is my layout rendered?", above).</span>
        </p>

        <h4>Custom Slot Rendering</h4>

        <p>Advanced layouts can become complicated. To manage this problem, you can feel free to
          use any techniques you already know from React - including use of a functional or class
          component for rendering any slot.
        </p>

        <p>Separating the markup for individual
          layout slots can help keep things easy to manage as your markup size and/or team size
          increases. Layout's <code>withMarkup()</code> helper conspires 🕵️ to make this case
          easy. Our Card component uses this technique - check 'em out with React Devtools!
        </p>

        <CodeExample language="jsx">
{`const Byline = namedSlot("Byline").withMarkup(
  (props) => <div>
    {/* all the markup needed for this slot */}
    <div className="fancy" data-fu={props.bar}>{children}</div>
  </div>
)`}
        </CodeExample>

        <p>Remember to render the <code>{'{'}children{'}'}</code>. The layout will need <code>Byline</code> in
          its <code>static slots</code> declaration and <code>{`{Byline}`}</code> somewhere in
          its <code>render()</code> function.</p>
      </div>
    </div>
  </TopMenuLayout>
), root);

