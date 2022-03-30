// https://www.terraform.io/docs/providers/okta/r/user_factor_question
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserFactorQuestionConfig extends cdktf.TerraformMetaArguments {
  /**
  * User password security answer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_factor_question#answer UserFactorQuestion#answer}
  */
  readonly answer: string;
  /**
  * Unique key for question
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_factor_question#key UserFactorQuestion#key}
  */
  readonly key: string;
  /**
  * ID of a Okta User
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_factor_question#user_id UserFactorQuestion#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_factor_question okta_user_factor_question}
*/
export class UserFactorQuestion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user_factor_question";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/user_factor_question okta_user_factor_question} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserFactorQuestionConfig
  */
  public constructor(scope: Construct, id: string, config: UserFactorQuestionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_factor_question',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._answer = config.answer;
    this._key = config.key;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // answer - computed: false, optional: false, required: true
  private _answer?: string; 
  public get answer() {
    return this.getStringAttribute('answer');
  }
  public set answer(value: string) {
    this._answer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInput() {
    return this._answer;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      answer: cdktf.stringToTerraform(this._answer),
      key: cdktf.stringToTerraform(this._key),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
