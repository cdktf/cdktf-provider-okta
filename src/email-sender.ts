// https://www.terraform.io/docs/providers/okta/r/email_sender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address to send from 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_address EmailSender#from_address}
  */
  readonly fromAddress: string;
  /**
  * Name of sender
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#from_name EmailSender#from_name}
  */
  readonly fromName: string;
  /**
  * Mail domain to send from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender#subdomain EmailSender#subdomain}
  */
  readonly subdomain: string;
}
export class EmailSenderDnsRecords extends cdktf.ComplexComputedList {

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/email_sender okta_email_sender}
*/
export class EmailSender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_email_sender";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/email_sender okta_email_sender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSenderConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSenderConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_sender',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fromAddress = config.fromAddress;
    this._fromName = config.fromName;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_records - computed: true, optional: false, required: false
  public dnsRecords(index: string) {
    return new EmailSenderDnsRecords(this, 'dns_records', index);
  }

  // from_address - computed: false, optional: false, required: true
  private _fromAddress?: string; 
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress;
  }

  // from_name - computed: false, optional: false, required: true
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from_address: cdktf.stringToTerraform(this._fromAddress),
      from_name: cdktf.stringToTerraform(this._fromName),
      subdomain: cdktf.stringToTerraform(this._subdomain),
    };
  }
}
