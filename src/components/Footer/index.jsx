import Link from "next/link";
import React from "react";

export function Index() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link>
                <a>Home</a>
              </Link>
              <Link>
                <a>Quiz</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>Quiz </div>
      </div>
      <div>
        <p>&copy;Todos os direitos reservados</p>
      </div>
    </div>
  );
}
