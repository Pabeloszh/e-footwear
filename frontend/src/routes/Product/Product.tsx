import React, { useState } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { StyledProduct } from "./Product.style"
import { Button } from '@material-ui/core';

export const Product:React.FC = () => {
    const [comments, toggleComments] = useState<boolean>(false);
    return (
        <StyledProduct comments={comments}>
            <div className="photos">
                <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                <div>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                </div>
            </div>
            <div className="desc">
                <p>Man's Footwear</p>
                <h2>All Star Black Sneakers</h2>
                <div className="color">
                    <img className="active" loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
                </div>
                <h3>Choose size</h3>
                <div className="size">
                    <p>35</p>
                    <p>36</p>
                    <p>37</p>
                    <p>38</p>
                    <p>39</p>
                    <p>40</p>
                    <p>41</p>
                    <p>42</p>
                    <p>43</p>
                    <p>44</p>
                    <p>45</p>
                    <p>46</p>
                    <p>47</p>
                    <p>48</p>
                    <p>49</p>
                    <p>50</p>
                    <p>51</p>
                    <p>52</p>
                    <p>53</p>
                    <p>54</p>
                </div>
                <div className="actions">
                    <Button variant="contained" color="primary">
                        Buy now
                    </Button>
                    <Button variant="contained" color="primary">
                        Add to list
                    </Button>
                </div>
                <div className="info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero velit atque tempora vitae ipsum veritatis quas dolore quod tempore possimus, molestias voluptate natus distinctio asperiores est adipisci laboriosam suscipit. Eius?
                    Tempore maxime inventore doloremque cum hic reprehenderit sint molestias nesciunt, animi corrupti id voluptatum, expedita dolorem, aliquid quas unde temporibus! Tempora velit odit harum! Tenetur odit corrupti vitae animi veniam.
                </div>
                <div className="rating">
                    <div className="title">
                        <h3>Rating(11)</h3>
                        <div>
                            <StarBorderIcon onMouseOver={(e)=> console.log(e)}/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <ArrowDropDownIcon onClick={()=>toggleComments(!comments)}/>
                        </div>
                    </div>
                    <div className="comments">
                        <div>
                            <div>
                                <div>
                                    <StarBorderIcon/>
                                    <StarBorderIcon/>
                                    <StarBorderIcon/>
                                    <StarBorderIcon/>
                                    <StarBorderIcon/>
                                </div>
                                <p>Fiskus2137</p>
                                <p>23-05-2021</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum fugit iure animi asperiores? Beatae molestiae est sequi, voluptatibus odio distinctio temporibus harum quaerat accusamus ullam! Corporis laborum maxime illum quo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledProduct>
    )
}

