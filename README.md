# FCC code

These are the challenge, and project answers for various FCC certifications.


# 10/18/18
Batch of completions.

This includes:
    renderMethod where you learn that you can code before the return.

    renderIfElse shows you that can use conditions to render a component based on need.

    updateLifecycle introduces methods that are called when something is about to be updated, or after it has been updated.
    componentWillUpdate() --- componentDidUpdate() --- componentWillReceiveProps(nextProps)

    shouldCompenentUpdate can be called to make sure the changes being made should be updated with shouldComponentUpdate(nextProps, nextState)

    conciseCondition allows you to add if/else statements in a shorthand inline way { condition && <p>I show up</p>}

    ternary uses a ternary if/else statement to render buttons inside the render function --- not a fan.

    renderCondition shows you how to use a ternary to send versions of the component based on props.





# 10/19/18 Batch of completions
    mapDynRender need to remember that the syntax is different in the render(). Html is normal, and javascript values are in curlies. Wasted a lot of time not paying attention to that.

    uniqueKeyAtt.js Talks about the importance of keys as an attribute. It is a way that Reactjs managing changing info.

    dynamFilter.js Uses the map() function to manage positive results from the state, and uses filter to then delivir them to component for rendering in a unique key list.


# 10/23/18 Batch of completions for react redux

    extractStateLog.js Managing to make changes to an array through set state without mutating state. Done using a spread operator to shallow copy and concat on the end with a new input.

        setState = {
            messages: [...this.state.messages.concat([this.state.input])];
        }


# 10/24/18 Batch of react redux

    rReducProvider.js I clearly spelled the phonetic version:)
    The provider is a Redux wrapper that goes around you app to connect them together.

    fullConnectRnR.js This is a full application showing how they work together. It shows you that you when you connect a component with props, and dispacth that it is jsx element that gets rendered as though it was be straight rendered.

    const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);  <===  renders in the app as a component piece.

    