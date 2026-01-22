import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const signUpFormSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  restaurantName: z.string().min(4, "O nome do restaurante deve ter no mínimo 4 caracteres"),
  managerName: z.string().min(4, "O nome do responsável deve ter no mínimo 4 caracteres"),
  phone: z.string().min(10, "Digite um número de telefone válido"),
});

  type SignUpForm = z.infer<typeof signUpFormSchema>;

  export function SignUp() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Enviamos um link de acesso para seu e-mail.", {
        action: {
          label: "Fazer login",
          onClick: () => {
            navigate("/sign-in");
          },
        },
      });
    } catch {
      toast.error("Erro ao enviar e-mail. Tente novamente mais tarde.");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="W-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie sua conta para começar a usar a plataforma
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 sm:w-[350px]">

            <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail </Label>
            <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
            <Label htmlFor="restaurantName"> Nome do restaurante </Label>
            <Input id="restaurantName" type="text" {...register("restaurantName")} />
            </div>

            <div className="space-y-2">
            <Label htmlFor="managerName"> Nome do responsável </Label>
            <Input id="managerName" type="text" {...register("managerName")} />
            </div>

            <div className="space-y-2">
            <Label htmlFor="phone"> Seu telefone </Label>
            <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Criar conta
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                Ao criar uma conta, você concorda com nossos <a className="underline underline-offset-4" href="#">Termos de Serviço</a> e <a className="underline underline-offset-4" href="#">Política de Privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
