import { CaretRight, Plus, X } from "phosphor-react";
import { Heading } from "../../../components/Heading";
import { Separator } from "../../../components/Separator";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { FormEvent, useContext, useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { AuthContext, db } from "../../../contexts/auth";
import { Tag } from "../../../components/Tag";
import { Modal } from "../../../components/Modal";
import clsx from "clsx";

interface NewNotesProps {
  handleCancel: () => void;
}

export function NewNotes({ handleCancel }: NewNotesProps) {
  const { fetchUserData } = useContext(AuthContext);

  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userId = sessionStorage.getItem("@AuthFirebase:userID") ?? "";
    const newData = { categories, title, note, lastUpdate: new Date().toISOString() };

    await updateDoc(doc(db, "users", userId), {
      notes: arrayUnion(newData)
    })
      .then(() => {
        alert("Nota criada com sucesso!");
        fetchUserData();
      })
      .catch((error) => {
        throw new Error("Não foi possível criar nota", error);
      });
  }

  function addCategory() {
    if (currentCategory) {
      const newCategory = [...categories];
      newCategory.push(currentCategory);
      setCategories(newCategory);
    }
  }

  function removeCategory(index: number) {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  }

  function addCategoriesContent() {
    return (
      <Modal.Root
        triggerBtn={
          <div
            className={clsx(
              "my-1 flex cursor-pointer items-center gap-2 rounded bg-feedback-graySoft px-2 py-1 text-gray-heavy " +
                "transition-colors hover:bg-feedback-grayLight"
            )}
          >
            <Plus size={16} />
            <Text size="sm">Adicionar categoria</Text>
          </div>
        }
      >
        <Modal.Dialog
          title="Adicionar categoria"
          description="Qual categoria você gostaria de adicionar à sua nota?"
          submitBtnText="Salvar"
          handleSubmit={() => addCategory()}
        >
          <TextInput.Root>
            <TextInput.Input type="text" id="category" placeholder="Escreva aqui" onChange={(e) => setCurrentCategory(e.target.value)} />
          </TextInput.Root>
        </Modal.Dialog>
      </Modal.Root>
    );
  }

  return (
    <div className="h-full">
      <Text size="lg" className="flex items-center gap-2 font-bold text-dark-soft">
        {"Minhas notas"} <CaretRight />
        {"Nova nota"}
      </Text>
      <Separator.Line />
      <Heading className="mt-4 text-dark-soft">Adicionar nova nota</Heading>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => {
            return (
              <Tag key={index} className="text-gray-heavy">
                <div className="flex items-center gap-3">
                  {category}
                  <div
                    onClick={() => removeCategory(index)}
                    className={clsx(
                      "cursor-pointer rounded-full p-1 text-feedback-gray hover:bg-feedback-grayLight " +
                        "focus:shadow-[0_0_0_2px] focus:shadow-feedback-grayLight focus:outline-none"
                    )}
                  >
                    <X size={12} />
                  </div>
                </div>
              </Tag>
            );
          })}
          {addCategoriesContent()}
        </div>
        <label htmlFor="title">
          <TextInput.Root>
            <TextInput.Input type="text" id="title" placeholder="Título da nota" onChange={(e) => setTitle(e.target.value)} />
          </TextInput.Root>
        </label>
        <label htmlFor="note">
          <TextInput.TextArea placeholder="Escreva sua nota" onChange={(e) => setNote(e.target.value)} />
        </label>

        <div className="flex gap-3">
          <Button.Secondary onClick={handleCancel}>Cancelar</Button.Secondary>
          <Button.Primary type="submit">Salvar</Button.Primary>
        </div>
      </form>
    </div>
  );
}
