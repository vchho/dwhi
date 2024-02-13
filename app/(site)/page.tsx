import { Shell } from "@/components/shell";

export default function Home() {
  return (
    <Shell>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:pt-24 lg:pb-10"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl ">
          Your all in one pantry management application. Welcome to{" "}
          <span className="underline bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            DWHI
          </span>
        </h1>
        <span className="text-center text-lg text-muted-foreground">
          DWHI helps you manage what you have stowed away <br />
          in your fridge or pantry.
        </span>
      </section>
    </Shell>
  );
}
