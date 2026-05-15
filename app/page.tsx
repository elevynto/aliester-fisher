import Image from "next/image";
import { Section } from "./components/Section";
import { CallButton } from "./components/CallButton";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <header className="section">
        <h1 className={styles.heroHeading}>
          Aliester Fisher
          <br className={styles.headingBreak} />
          <span className={styles.headingDash}> — </span>
          AI-Enabled Engineering Consultant
        </h1>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.tagline}>Production-ready AI-enabled engineering systems.</p>
            <div className={styles.pitchWrap}>
              <p className={styles.pitch}>
                I help engineering teams build scalable, production-ready development systems that safely integrate
                AI-assisted workflows.
              </p>
              <p className={styles.pitch}>
                Most teams are experimenting with AI-assisted development — I help turn that into a reliable, scalable
                engineering system.
              </p>
            </div>
          </div>
          <Image
            className={styles.heroPortrait}
            src="/profile.png"
            alt="Portrait of Aliester Fisher"
            width={321}
            height={321}
            priority
          />
        </div>

        <div className={styles.ctaRow}>
          <CallButton />
        </div>
        <p className={styles.ctaMeta}>No commitment — just a quick chat to see if this is relevant.</p>
      </header>
      <p className={styles.credibility}>
        12+ years building scalable production systems across fintech, startups, and complex engineering environments.
      </p>
      <Section title="Most teams are using AI… but not effectively">
        <p>AI coding tools are powerful, but in most teams they lead to:</p>
        <ul>
          <li>inconsistent outputs</li>
          <li>architectural drift</li>
          <li>unreliable delivery patterns</li>
          <li>duplicated implementation work</li>
          <li>onboarding inconsistencies</li>
        </ul>
        <p>The issue isn&rsquo;t the tools — it&rsquo;s the lack of structure around how they&rsquo;re used.</p>
      </Section>

      <Section title="Turn AI into a reliable part of your engineering system">
        <p>
          I design structured engineering workflows that integrate AI-assisted development directly into your existing
          software delivery process.
        </p>
        <p>Instead of ad-hoc usage, your team gets:</p>
        <ul>
          <li>repository-aware AI-assisted development workflows</li>
          <li>scoped feature workflows</li>
          <li>consistent development patterns</li>
          <li>validation and guardrails</li>
          <li>production-safe outputs</li>
        </ul>
        <p>This allows teams to move faster without sacrificing code quality or architecture.</p>
      </Section>

      <Section title="A focused 3–5 day implementation">
        <ol className={styles.phaseList}>
          <li>
            <h3>Assess</h3>
            <p>Understand your current setup, architecture, and how AI is being used today.</p>
          </li>
          <li>
            <h3>Integrate</h3>
            <p>
              Integrate AI-assisted development tooling into your existing engineering environment with the right
              context and structure.
            </p>
          </li>
          <li>
            <h3>Structure</h3>
            <p>Design structured workflows for:</p>
            <ul>
              <li>feature development</li>
              <li>refactoring</li>
              <li>testing</li>
              <li>documentation</li>
            </ul>
          </li>
          <li>
            <h3>Safeguard</h3>
            <p>Introduce validation layers and guardrails to ensure safe, reliable outputs.</p>
          </li>
          <li>
            <h3>Enable</h3>
            <p>Train your team so workflows are adopted consistently.</p>
          </li>
        </ol>
      </Section>

      <Section title="What you get">
        <ul>
          <li>faster and more consistent feature delivery</li>
          <li>validation and reliability systems</li>
          <li>more consistent engineering delivery</li>
          <li>improved maintainability</li>
          <li>architecture-aligned implementation</li>
          <li>scalable onboarding patterns</li>
          <li>clearer development standards</li>
        </ul>
        <p>
          Engagements typically range from <strong className={styles.priceRange}>£3000–£5000</strong>, depending on scope.
        </p>
      </Section>

      <Section title="What this enables">
        <ul>
          <li>faster feature delivery</li>
          <li>consistent AI usage across your team</li>
          <li>improved trust in generated code</li>
          <li>reduced rework and debugging</li>
          <li>scalable, repeatable engineering workflows</li>
        </ul>
      </Section>

      <Section title="About">
        <div className={styles.aboutContent}>
          <p>
            I&rsquo;m Aliester Fisher, a Senior Full-Stack Engineer with over 12 years of experience building scalable,
            production-grade applications.
          </p>
          <p>
            I&rsquo;ve worked in fast-paced startup environments and led the development of complex, data-driven
            systems.
          </p>
          <p>
            Today, I help engineering teams modernise software delivery workflows through structured, AI-enabled
            engineering systems.
          </p>
          <p className={styles.aboutLead}>My focus is simple:</p>
          <blockquote className={styles.quote}>
            &ldquo;Make AI a dependable part of modern software development.&rdquo;
          </blockquote>
        </div>
      </Section>

      <Section title="Thinking about integrating AI into your engineering workflow?">
        <p>
          If your team is already experimenting with AI tools but struggling to use them effectively, I can help you
          structure this properly.
        </p>
        <div className={styles.ctaRow}>
          <CallButton />
        </div>
        <p className={styles.ctaMeta}>No commitment — just a quick chat to see if this is relevant.</p>
      </Section>

      <Section title="Company" id="company`">
        <div className={styles.companyMeta}>
          <p>Aliester Fisher Consulting Ltd</p>
          <p>Registered in England and Wales</p>
          <p>Company No. 09523879</p>
          <p>Vat No. GB223965594</p>
        </div>
      </Section>

      <footer className="footer">
        <h2>Contact</h2>
        <p>Prefer to reach out directly?</p>
        <p>
          Email: <a href="mailto:hello@aliesterfisher.dev">hello@aliesterfisher.dev</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/aliesterfisher/" rel="me noopener" target="_blank">
            https://www.linkedin.com/in/aliesterfisher/
          </a>
        </p>
        <div className={styles.footerWrap} />
      </footer>
    </main>
  );
}
