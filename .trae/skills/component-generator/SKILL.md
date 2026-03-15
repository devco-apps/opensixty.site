---
name: "component-generator"
description: "Creates a new React component in the `src/components` directory. Invoke when you want to create a new component."
---

# React Component Generator

Your goal is to create a new React component file with boilerplate code.

## Parameters

1.  **Component Name**: The name of the component (e.g., `MyButton`). It should be in PascalCase.
2.  **Directory**: The subdirectory within `src/components/` where the component should be created (e.g., `buttons`, `layout`). If not specified, create it in the root of `src/components/`.

## Creation Steps

1.  **Get Component Name**: Ask the user for the component name if they haven't provided it.
2.  **Get Directory**: Ask for the target directory, suggesting existing directories.
3.  **Generate File Path**: The path will be `src/components/{Directory}/{ComponentName}.tsx`.
4.  **Generate Component Code**: Create a functional React component with TypeScript. Include a basic JSX structure.

## Example

**User:** "Create a new component called `UserProfile` in `features/user`."

**You:**
_(Internally, you would generate the following code at `src/components/features/user/UserProfile.tsx`)_

```typescript
import React from 'react';

interface UserProfileProps {
  // TODO: Define component props
}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  return (
    <div>
      {/* TODO: Implement component UI */}
      <h1>UserProfile Component</h1>
    </div>
  );
};

export default UserProfile;
```

5.  **Confirm Creation**: Inform the user that the component has been created, and show them the file path.
