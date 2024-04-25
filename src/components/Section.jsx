export default function Section({ title, children, ...props}) { // rest property -> groups all remaining object properties into a new object (e.g props in our case)
  return (
    <section {...props}> {/* all extra props now will be forwarded to our built-in Section component */}
      <h2>{title}</h2>
      {children}
    </section>
  )
}