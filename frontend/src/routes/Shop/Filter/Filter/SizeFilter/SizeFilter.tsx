import React from 'react';
import {StyledSize} from "./SizeFilter.style"

export const SizeFilter:React.FC = () => {
    return (
        <StyledSize>
             <h2>Size:</h2>
                <div className="size-container">
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>35</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>36</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>37</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>38</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>39</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>40</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>41</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>42</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>43</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>44</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>45</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>46</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>47</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>48</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>49</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>50</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>51</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>52</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>53</p>
                    <p onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}>54</p>
                </div>
        </StyledSize>
    )
}


