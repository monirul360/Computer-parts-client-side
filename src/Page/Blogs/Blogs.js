import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="px-24">
                <h1 className=" text-2xl text-center font-bold text-secondary mt-8">
                    Question And Answer Part
                </h1>
                <div class="divider text-secondary">First Question</div>
                <div className="mb-5">
                    <h2 className="text-xl text-secondary-900 font-bold">
                        Q.1. How will you improve the performance of a React Application?
                    </h2>
                    <p>(a)Keeping component state local where necessary</p>
                    <p>(b) Memoizing React components to prevent unnecessary re-renders</p>
                    <p>(c)Code-splitting in React using dynamic import</p>
                    <p>(d) Windowing or list virtualization in React</p>
                    <p>(e)Lazy loading images in React</p>
                </div>
                <div class="divider text-secondary">second Question</div>
                <div className="mb-5">
                    <h2 className="text-xl text-secondary-900 font-bold">
                        Q.2. What are the different ways to manage a state in a React
                        application?
                    </h2>
                    <h5 className="text-sxl text-secondary-900">
                        There are four main types of state you need to properly manage in your
                        React apps:
                    </h5>
                    <p>
                        <b>
                            <u>Local (UI) state Local state:</u>
                        </b>
                        Local (UI) state Local state is data we manage in one or another
                        component. Local state is most often managed in React using the
                        useState hook.
                    </p>
                    <p>
                        <b>
                            <u>Global (UI) state Global state:</u>
                        </b>
                        Global (UI) state Global state is data we manage across multiple
                        components. Global state is necessary when we want to get and update
                        data anywhere in our app, or in multiple components at least.
                    </p>
                    <p>
                        <b>
                            <u>Server state:</u>
                        </b>
                        Server state Data that comes from an external server that must be
                        integrated with our UI state. Server state is a simple concept, but
                        can be hard to manage alongside all of our local and global UI state.
                    </p>
                    <p>
                        <b>
                            <u>URL state:</u>
                        </b>
                        Data that exists on our URLs, including the pathname and query
                        parameters. URL state is often missing as a category of state, but it
                        is an important one. In many cases, a lot of major parts of our
                        application rely upon accessing URL state. Try to imagine building a
                        blog without being able to fetch a post based off of its slug or id
                        that is located in the URL!
                    </p>
                </div>
                <div class="divider text-secondary">Third Question</div>
                <div className="mb-5">
                    <h2 className="text-xl text-secondary-900 font-bold">
                        Q.3. How does prototypical inheritance work?
                    </h2>
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add
                        methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object.
                        Traditionally, in order to get and set the [[Prototype]] of an object,
                        we use Object.getPrototypeOf and Object.
                    </p>
                </div>
                <div class="divider text-secondary">Fourth Question</div>
                <div className="mb-10">
                    <h2 className="text-xl text-secondary-900 font-bold">
                        Q.4. What is a unit test? Why should write unit tests?
                    </h2>
                    <p>
                        The main objective of unit testing is to isolate written code to test
                        and determine if it works as intended. Unit testing is an important
                        step in the development process, because if done correctly, it can
                        help detect early flaws in code which may be more difficult to find in
                        later testing stages.
                    </p>
                </div>
                <div class="divider text-secondary">Fift Question</div>
                <div className="mb-10">
                    <h2 className="text-xl text-purple-900 font-bold">
                        {" "}
                        Q.5.Why you do not set the state directly in React. For example, if
                        you have const [products, setProducts] = useState([]). Why you do not
                        set products = [...] instead, you use the setProducts
                    </h2>
                    <p>
                        We should never update the state directly because of the following
                        reasons: If you update it directly, calling the setState() afterward
                        may just replace the update you made. When you directly update the
                        state, it does not change this.state immediately. Instead, it creates
                        a pending state transition, and accessing it after calling this method
                        will only return the present value. You will lose control of the state
                        across all components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;