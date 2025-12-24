"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
            AI PAY-LINK™
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Create
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden z-50 relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu();
            }}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer - Full Screen */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
          {/* Full Screen Drawer */}
          <div className="fixed inset-0 bg-background z-50 flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border">
              <span className="text-xl font-bold">AI PAY-LINK™</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                aria-label="Close menu"
                type="button"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col flex-1 p-6 space-y-6 mt-8">
              <Link
                href="/dashboard"
                className="text-2xl font-medium text-foreground transition-colors hover:text-primary py-4"
                onClick={closeMenu}
              >
                Dashboard
              </Link>
              <Link
                href="/create"
                className="text-2xl font-medium text-foreground transition-colors hover:text-primary py-4"
                onClick={closeMenu}
              >
                Create
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
