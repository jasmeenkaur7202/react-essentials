import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from './Section';

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
        {/* use spread operator to pull out all key value pairs in CORE_CONCEPTS array -> these will be added as props to this component...*/}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

        {/* map method such that UI doesn't break, if any item in the CORE_CONCEPTS array is not present*/}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  )
}