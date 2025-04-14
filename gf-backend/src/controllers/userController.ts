import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { nome, email, senha, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ msg: 'Email já registrado' });
      return;
    }

    const hash = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: hash, role });

    res.status(201).json({ msg: 'Usuário criado', user });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select("+senha");
    console.log("Usuário encontrado:", user);
    console.log("Senha armazenada:", user?.senha);
    if (!user || !user.senha) {
      res.status(400).json({ message: "Usuário não encontrado ou senha inválida!" });
    }

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      res.status(401).json({ msg: 'Credenciais inválidas' });
      return;
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET não está definido.');
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user: { nome: user.nome, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
};
