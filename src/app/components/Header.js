import Link from 'next/link';
import { useAuth } from '../utils/auth';

export default function Header() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <header>
      <nav>
        <Link href="/">
          <a>My Blog</a>
        </Link>
        <ul>
          {user ? (
            <>
              <li>
                <Link href="/create-post">
                  <a>Create Post</a>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
