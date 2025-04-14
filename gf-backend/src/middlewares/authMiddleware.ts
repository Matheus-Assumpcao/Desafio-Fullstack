import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  role: 'admin' | 'cliente';
}

export const authMiddleware = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Token não fornecido' });
      return;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
      (req as any).user = decoded;

      if (roles && !roles.includes(decoded.role)) {
        res.status(403).json({ message: 'Acesso negado' });
        return;
      }

      next();
      return; // <- aqui
    } catch (error) {
      res.status(403).json({ message: 'Token inválido' });
      return;
    }
  };
};

export default authMiddleware;

