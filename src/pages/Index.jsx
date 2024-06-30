import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold text-center">Welcome to SaaS Business</h1>
      <p className="text-xl text-center max-w-2xl">
        Our SaaS solution helps you streamline your business processes, improve efficiency, and drive growth. Join us today and take your business to the next level.
      </p>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
};

export default Index;