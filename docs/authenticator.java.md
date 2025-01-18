# `authenticator` Submodule <a name="`authenticator` Submodule" id="@cdktf/provider-okta.authenticator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Authenticator <a name="Authenticator" id="@cdktf/provider-okta.authenticator.Authenticator"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator okta_authenticator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.Authenticator;

Authenticator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .key(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .legacyIgnoreName(java.lang.Boolean)
//  .legacyIgnoreName(IResolvable)
//  .providerAuthPort(java.lang.Number)
//  .providerHost(java.lang.String)
//  .providerHostname(java.lang.String)
//  .providerIntegrationKey(java.lang.String)
//  .providerJson(java.lang.String)
//  .providerSecretKey(java.lang.String)
//  .providerSharedSecret(java.lang.String)
//  .providerUserNameTemplate(java.lang.String)
//  .settings(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | A human-readable string that identifies the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.legacyIgnoreName">legacyIgnoreName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Name does not trigger change detection (legacy behavior). |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerAuthPort">providerAuthPort</a></code> | <code>java.lang.Number</code> | The RADIUS server port (for example 1812). |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHost">providerHost</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHostname">providerHostname</a></code> | <code>java.lang.String</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerIntegrationKey">providerIntegrationKey</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerJson">providerJson</a></code> | <code>java.lang.String</code> | Provider JSON allows for expressive providervalues. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSecretKey">providerSecretKey</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSharedSecret">providerSharedSecret</a></code> | <code>java.lang.String</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerUserNameTemplate">providerUserNameTemplate</a></code> | <code>java.lang.String</code> | Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.settings">settings</a></code> | <code>java.lang.String</code> | Settings for the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.key"></a>

- *Type:* java.lang.String

A human-readable string that identifies the authenticator.

Some authenticators are available by feature flag on the organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`, `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#key Authenticator#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#name Authenticator#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `legacyIgnoreName`<sup>Optional</sup> <a name="legacyIgnoreName" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.legacyIgnoreName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Name does not trigger change detection (legacy behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#legacy_ignore_name Authenticator#legacy_ignore_name}

---

##### `providerAuthPort`<sup>Optional</sup> <a name="providerAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerAuthPort"></a>

- *Type:* java.lang.Number

The RADIUS server port (for example 1812).

This is defined when the On-Prem RADIUS server is configured. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `providerHost`<sup>Optional</sup> <a name="providerHost" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHost"></a>

- *Type:* java.lang.String

(DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `providerHostname`<sup>Optional</sup> <a name="providerHostname" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHostname"></a>

- *Type:* java.lang.String

Server host name or IP address.

Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `providerIntegrationKey`<sup>Optional</sup> <a name="providerIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerIntegrationKey"></a>

- *Type:* java.lang.String

(DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `providerJson`<sup>Optional</sup> <a name="providerJson" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerJson"></a>

- *Type:* java.lang.String

Provider JSON allows for expressive providervalues.

This argument conflicts with the other 'provider_xxx' arguments. The [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed provider values for a Duo authenticator. [Provider values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are listed in Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `providerSecretKey`<sup>Optional</sup> <a name="providerSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSecretKey"></a>

- *Type:* java.lang.String

(DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `providerSharedSecret`<sup>Optional</sup> <a name="providerSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSharedSecret"></a>

- *Type:* java.lang.String

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `providerUserNameTemplate`<sup>Optional</sup> <a name="providerUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerUserNameTemplate"></a>

- *Type:* java.lang.String

Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.settings"></a>

- *Type:* java.lang.String

Settings for the authenticator.

The settings JSON contains values based on Authenticator key. It is not used for authenticators with type `security_key`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#settings Authenticator#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#status Authenticator#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetLegacyIgnoreName">resetLegacyIgnoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort">resetProviderAuthPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost">resetProviderHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname">resetProviderHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey">resetProviderIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson">resetProviderJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey">resetProviderSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret">resetProviderSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate">resetProviderUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.authenticator.Authenticator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.authenticator.Authenticator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.authenticator.Authenticator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.authenticator.Authenticator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.authenticator.Authenticator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.authenticator.Authenticator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.authenticator.Authenticator.resetId"></a>

```java
public void resetId()
```

##### `resetLegacyIgnoreName` <a name="resetLegacyIgnoreName" id="@cdktf/provider-okta.authenticator.Authenticator.resetLegacyIgnoreName"></a>

```java
public void resetLegacyIgnoreName()
```

##### `resetProviderAuthPort` <a name="resetProviderAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort"></a>

```java
public void resetProviderAuthPort()
```

##### `resetProviderHost` <a name="resetProviderHost" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost"></a>

```java
public void resetProviderHost()
```

##### `resetProviderHostname` <a name="resetProviderHostname" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname"></a>

```java
public void resetProviderHostname()
```

##### `resetProviderIntegrationKey` <a name="resetProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey"></a>

```java
public void resetProviderIntegrationKey()
```

##### `resetProviderJson` <a name="resetProviderJson" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson"></a>

```java
public void resetProviderJson()
```

##### `resetProviderSecretKey` <a name="resetProviderSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey"></a>

```java
public void resetProviderSecretKey()
```

##### `resetProviderSharedSecret` <a name="resetProviderSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret"></a>

```java
public void resetProviderSharedSecret()
```

##### `resetProviderUserNameTemplate` <a name="resetProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate"></a>

```java
public void resetProviderUserNameTemplate()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-okta.authenticator.Authenticator.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.authenticator.Authenticator.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Authenticator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.Authenticator;

Authenticator.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.Authenticator;

Authenticator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.Authenticator;

Authenticator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.Authenticator;

Authenticator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Authenticator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Authenticator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Authenticator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Authenticator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Authenticator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId">providerInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerType">providerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreNameInput">legacyIgnoreNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput">providerAuthPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput">providerHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput">providerHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput">providerIntegrationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput">providerJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput">providerSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput">providerSharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput">providerUserNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreName">legacyIgnoreName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort">providerAuthPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHost">providerHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname">providerHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey">providerIntegrationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJson">providerJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey">providerSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret">providerSharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate">providerUserNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authenticator.Authenticator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authenticator.Authenticator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.Authenticator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.Authenticator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authenticator.Authenticator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `providerInstanceId`<sup>Required</sup> <a name="providerInstanceId" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId"></a>

```java
public java.lang.String getProviderInstanceId();
```

- *Type:* java.lang.String

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerType"></a>

```java
public java.lang.String getProviderType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authenticator.Authenticator.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `legacyIgnoreNameInput`<sup>Optional</sup> <a name="legacyIgnoreNameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreNameInput"></a>

```java
public java.lang.Object getLegacyIgnoreNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerAuthPortInput`<sup>Optional</sup> <a name="providerAuthPortInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput"></a>

```java
public java.lang.Number getProviderAuthPortInput();
```

- *Type:* java.lang.Number

---

##### `providerHostInput`<sup>Optional</sup> <a name="providerHostInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput"></a>

```java
public java.lang.String getProviderHostInput();
```

- *Type:* java.lang.String

---

##### `providerHostnameInput`<sup>Optional</sup> <a name="providerHostnameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput"></a>

```java
public java.lang.String getProviderHostnameInput();
```

- *Type:* java.lang.String

---

##### `providerIntegrationKeyInput`<sup>Optional</sup> <a name="providerIntegrationKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput"></a>

```java
public java.lang.String getProviderIntegrationKeyInput();
```

- *Type:* java.lang.String

---

##### `providerJsonInput`<sup>Optional</sup> <a name="providerJsonInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput"></a>

```java
public java.lang.String getProviderJsonInput();
```

- *Type:* java.lang.String

---

##### `providerSecretKeyInput`<sup>Optional</sup> <a name="providerSecretKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput"></a>

```java
public java.lang.String getProviderSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `providerSharedSecretInput`<sup>Optional</sup> <a name="providerSharedSecretInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput"></a>

```java
public java.lang.String getProviderSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `providerUserNameTemplateInput`<sup>Optional</sup> <a name="providerUserNameTemplateInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput"></a>

```java
public java.lang.String getProviderUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.Authenticator.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `legacyIgnoreName`<sup>Required</sup> <a name="legacyIgnoreName" id="@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreName"></a>

```java
public java.lang.Object getLegacyIgnoreName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.Authenticator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerAuthPort`<sup>Required</sup> <a name="providerAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort"></a>

```java
public java.lang.Number getProviderAuthPort();
```

- *Type:* java.lang.Number

---

##### `providerHost`<sup>Required</sup> <a name="providerHost" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHost"></a>

```java
public java.lang.String getProviderHost();
```

- *Type:* java.lang.String

---

##### `providerHostname`<sup>Required</sup> <a name="providerHostname" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname"></a>

```java
public java.lang.String getProviderHostname();
```

- *Type:* java.lang.String

---

##### `providerIntegrationKey`<sup>Required</sup> <a name="providerIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey"></a>

```java
public java.lang.String getProviderIntegrationKey();
```

- *Type:* java.lang.String

---

##### `providerJson`<sup>Required</sup> <a name="providerJson" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJson"></a>

```java
public java.lang.String getProviderJson();
```

- *Type:* java.lang.String

---

##### `providerSecretKey`<sup>Required</sup> <a name="providerSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey"></a>

```java
public java.lang.String getProviderSecretKey();
```

- *Type:* java.lang.String

---

##### `providerSharedSecret`<sup>Required</sup> <a name="providerSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret"></a>

```java
public java.lang.String getProviderSharedSecret();
```

- *Type:* java.lang.String

---

##### `providerUserNameTemplate`<sup>Required</sup> <a name="providerUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate"></a>

```java
public java.lang.String getProviderUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.Authenticator.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authenticator.Authenticator.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatorConfig <a name="AuthenticatorConfig" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.authenticator.AuthenticatorConfig;

AuthenticatorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .key(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .legacyIgnoreName(java.lang.Boolean)
//  .legacyIgnoreName(IResolvable)
//  .providerAuthPort(java.lang.Number)
//  .providerHost(java.lang.String)
//  .providerHostname(java.lang.String)
//  .providerIntegrationKey(java.lang.String)
//  .providerJson(java.lang.String)
//  .providerSecretKey(java.lang.String)
//  .providerSharedSecret(java.lang.String)
//  .providerUserNameTemplate(java.lang.String)
//  .settings(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key">key</a></code> | <code>java.lang.String</code> | A human-readable string that identifies the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.legacyIgnoreName">legacyIgnoreName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Name does not trigger change detection (legacy behavior). |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort">providerAuthPort</a></code> | <code>java.lang.Number</code> | The RADIUS server port (for example 1812). |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost">providerHost</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname">providerHostname</a></code> | <code>java.lang.String</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey">providerIntegrationKey</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson">providerJson</a></code> | <code>java.lang.String</code> | Provider JSON allows for expressive providervalues. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey">providerSecretKey</a></code> | <code>java.lang.String</code> | (DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret">providerSharedSecret</a></code> | <code>java.lang.String</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate">providerUserNameTemplate</a></code> | <code>java.lang.String</code> | Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings">settings</a></code> | <code>java.lang.String</code> | Settings for the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status">status</a></code> | <code>java.lang.String</code> | Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A human-readable string that identifies the authenticator.

Some authenticators are available by feature flag on the organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`, `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#key Authenticator#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#name Authenticator#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `legacyIgnoreName`<sup>Optional</sup> <a name="legacyIgnoreName" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.legacyIgnoreName"></a>

```java
public java.lang.Object getLegacyIgnoreName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Name does not trigger change detection (legacy behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#legacy_ignore_name Authenticator#legacy_ignore_name}

---

##### `providerAuthPort`<sup>Optional</sup> <a name="providerAuthPort" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort"></a>

```java
public java.lang.Number getProviderAuthPort();
```

- *Type:* java.lang.Number

The RADIUS server port (for example 1812).

This is defined when the On-Prem RADIUS server is configured. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `providerHost`<sup>Optional</sup> <a name="providerHost" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost"></a>

```java
public java.lang.String getProviderHost();
```

- *Type:* java.lang.String

(DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `providerHostname`<sup>Optional</sup> <a name="providerHostname" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname"></a>

```java
public java.lang.String getProviderHostname();
```

- *Type:* java.lang.String

Server host name or IP address.

Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `providerIntegrationKey`<sup>Optional</sup> <a name="providerIntegrationKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey"></a>

```java
public java.lang.String getProviderIntegrationKey();
```

- *Type:* java.lang.String

(DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `providerJson`<sup>Optional</sup> <a name="providerJson" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson"></a>

```java
public java.lang.String getProviderJson();
```

- *Type:* java.lang.String

Provider JSON allows for expressive providervalues.

This argument conflicts with the other 'provider_xxx' arguments. The [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed provider values for a Duo authenticator. [Provider values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are listed in Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `providerSecretKey`<sup>Optional</sup> <a name="providerSecretKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey"></a>

```java
public java.lang.String getProviderSecretKey();
```

- *Type:* java.lang.String

(DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `providerSharedSecret`<sup>Optional</sup> <a name="providerSharedSecret" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret"></a>

```java
public java.lang.String getProviderSharedSecret();
```

- *Type:* java.lang.String

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `providerUserNameTemplate`<sup>Optional</sup> <a name="providerUserNameTemplate" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate"></a>

```java
public java.lang.String getProviderUserNameTemplate();
```

- *Type:* java.lang.String

Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Settings for the authenticator.

The settings JSON contains values based on Authenticator key. It is not used for authenticators with type `security_key`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#settings Authenticator#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/authenticator#status Authenticator#status}

---



