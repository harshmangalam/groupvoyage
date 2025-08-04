import SubmissionForm from "./submission-form";

export function OrganizerSubmission() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-4">
      <section className="text-center py-12 md:py-24 lg:py-32 w-full max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">
          Join a community of passionate travelers and explore unique weekend
          trips organized by groups around the world.
        </p>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400 mb-12">
          Are you a travel group organizer? Submit your details below to get
          your trips featured!
        </p>
      </section>
      <div className="w-full max-w-md">
        <SubmissionForm />
      </div>
    </main>
  );
}
