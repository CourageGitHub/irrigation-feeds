import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
export function FormPanel({ type }: { type: "volunteer" | "partner" | "contact" }) {
  const [sent, setSent] = useState(false);
  const title =
    type === "volunteer"
      ? "Volunteer Application"
      : type === "partner"
        ? "Partnership Inquiry"
        : "Send an Inquiry";
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
  }
  if (sent)
    return (
      <div className="rounded-xl border border-primary/20 bg-surface p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h2 className="mt-5 text-2xl font-bold">Thank you for reaching out</h2>
        <p className="mt-2 text-muted-foreground">
          This demonstration form has been validated. Persistent submission delivery can be
          connected when requested.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another response
        </Button>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8"
    >
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fields marked with an asterisk are required.
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {type === "partner" ? (
          <Field label="Organization Name" name="organization" />
        ) : (
          <Field label="Full Name" name="name" />
        )}
        {type === "partner" && <Field label="Contact Person" name="contactPerson" />}
        <Field label="Email" name="email" type="email" />
        <Field label="Phone" name="phone" required={false} />
        {type === "volunteer" && (
          <Field label="Organization" name="organization" required={false} />
        )}
        <div className="sm:col-span-2">
          <Label htmlFor={`${type}-interest`}>
            {type === "contact" ? "Inquiry Type" : "Area of Interest"} *
          </Label>
          <select
            id={`${type}-interest`}
            required
            className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Select one</option>
            <option>Farmer education</option>
            <option>Irrigation technology</option>
            <option>Partnerships and advocacy</option>
            <option>Monitoring and learning</option>
            <option>General inquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor={`${type}-message`}>Message *</Label>
          <Textarea
            id={`${type}-message`}
            required
            minLength={10}
            maxLength={1200}
            className="mt-2 min-h-32"
            placeholder="Tell us how you would like to be involved."
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6">
        Submit <Send />
      </Button>
    </form>
  );
}
function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={type === "email" ? 255 : 100}
        className="mt-2 h-11"
      />
    </div>
  );
}
