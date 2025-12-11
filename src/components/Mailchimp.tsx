"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row, Textarea } from "@once-ui-system/core";
// DİKKAT: Textarea yukarıdaki importlarda yoksa, hata verirse import kısmından silip 
// aşağıda standart <textarea ... /> kullanabiliriz.
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState, useCallback } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  // Mesaj için yeni state
  const [message, setMessage] = useState<string>(""); 
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (error) {
        if (!validateEmail(value)) setError("Please enter a valid email address.");
        else setError("");
    }
  };

  const debouncedValidation = useCallback(
    debounce((value: string) => {
      if (!validateEmail(value)) setError("Please enter a valid email address.");
      else setError("");
    }, 1000),
    []
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      if (!error) debouncedValidation(value);
      else if(validateEmail(value)) setError("");
  }

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) setError("Please enter a valid email address.");
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{ x: 0, y: 0, radius: 100, cursor: false }}
        gradient={{
             display: true, opacity: 60, x: 0, y: 0, width: 100, height: 100, tilt: 0, 
             colorStart: "accent-solid-medium", colorEnd: "static-transparent" 
        }}
        dots={{ display: true, opacity: 30, size: "2", color: "brand-on-background-weak" }}
      />
      
      <Column maxWidth="s" horizontal="center" marginBottom="l">
        <Heading marginBottom="s" variant="display-strong-xs" align="center">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" align="center" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      
      <form
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
        }}
        // BURAYA KENDİ FORMSPREE LINKINI KOYMAYI UNUTMA
        action="https://formspree.io/f/mpwvyebg" 
        method="POST"
      >
        <Column
          fillWidth
          maxWidth="s" // Formu biraz daha genişlettik (s beden)
          gap="16"     // Elemanlar arası boşluk
        >
          {/* Email Alanı */}
          <Input
            id="email"
            name="email"
            label="Email" // Varsa label özelliği, yoksa silebilirsin
            type="email"
            placeholder="Your email address"
            required
            value={email} 
            onChange={onInputChange}
            onBlur={handleBlur}
            errorMessage={error}
          />

          {/* Mesaj Alanı */}
          {/* Eğer Textarea bileşeni yoksa aşağıya standart HTML alternatifi ekledim */}
          <Textarea
            id="message"
            name="message"
            label="Message"
            placeholder="Write your message here..."
            required
            rows={4} // Satır sayısı
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />

          {/* Konu Başlığı (Gizli) */}
          <input type="hidden" name="_subject" value="Portfolyo İletişim Formu Mesajı" />

          {/* Buton */}
          <Button type="submit" size="m" fillWidth>
            Send Message
          </Button>
        </Column>
      </form>
    </Column>
  );
};