# `factorTotp` Submodule <a name="`factorTotp` Submodule" id="@cdktf/provider-okta.factorTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FactorTotp <a name="FactorTotp" id="@cdktf/provider-okta.factorTotp.FactorTotp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp okta_factor_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotp;

FactorTotp.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .clockDriftInterval(java.lang.Number)
//  .hmacAlgorithm(java.lang.String)
//  .id(java.lang.String)
//  .otpLength(java.lang.Number)
//  .sharedSecretEncoding(java.lang.String)
//  .timeStep(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The TOTP name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.clockDriftInterval">clockDriftInterval</a></code> | <code>java.lang.Number</code> | Clock drift interval. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.hmacAlgorithm">hmacAlgorithm</a></code> | <code>java.lang.String</code> | HMAC Algorithm. Valid values: `HMacSHA1`, `HMacSHA256`, `HMacSHA512`. Default is `HMacSHA512`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#id FactorTotp#id}. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.otpLength">otpLength</a></code> | <code>java.lang.Number</code> | Length of the password. Default is `6`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>java.lang.String</code> | Shared secret encoding. Valid values: `base32`, `base64`, `hexadecimal`. Default is `base32`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.timeStep">timeStep</a></code> | <code>java.lang.Number</code> | Time step in seconds. Valid values: `15`, `30`, `60`. Default is `15`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The TOTP name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#name FactorTotp#name}

---

##### `clockDriftInterval`<sup>Optional</sup> <a name="clockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.clockDriftInterval"></a>

- *Type:* java.lang.Number

Clock drift interval.

This setting allows you to build in tolerance for any drift between the token's current time and the server's current time. Valid values: `3`, `5`, `10`. Default is `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}

---

##### `hmacAlgorithm`<sup>Optional</sup> <a name="hmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.hmacAlgorithm"></a>

- *Type:* java.lang.String

HMAC Algorithm. Valid values: `HMacSHA1`, `HMacSHA256`, `HMacSHA512`. Default is `HMacSHA512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#id FactorTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `otpLength`<sup>Optional</sup> <a name="otpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.otpLength"></a>

- *Type:* java.lang.Number

Length of the password. Default is `6`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#otp_length FactorTotp#otp_length}

---

##### `sharedSecretEncoding`<sup>Optional</sup> <a name="sharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.sharedSecretEncoding"></a>

- *Type:* java.lang.String

Shared secret encoding. Valid values: `base32`, `base64`, `hexadecimal`. Default is `base32`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}

---

##### `timeStep`<sup>Optional</sup> <a name="timeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.timeStep"></a>

- *Type:* java.lang.Number

Time step in seconds. Valid values: `15`, `30`, `60`. Default is `15`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#time_step FactorTotp#time_step}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval">resetClockDriftInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm">resetHmacAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength">resetOtpLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding">resetSharedSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep">resetTimeStep</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.factorTotp.FactorTotp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.factorTotp.FactorTotp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.factorTotp.FactorTotp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClockDriftInterval` <a name="resetClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval"></a>

```java
public void resetClockDriftInterval()
```

##### `resetHmacAlgorithm` <a name="resetHmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm"></a>

```java
public void resetHmacAlgorithm()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetId"></a>

```java
public void resetId()
```

##### `resetOtpLength` <a name="resetOtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength"></a>

```java
public void resetOtpLength()
```

##### `resetSharedSecretEncoding` <a name="resetSharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding"></a>

```java
public void resetSharedSecretEncoding()
```

##### `resetTimeStep` <a name="resetTimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep"></a>

```java
public void resetTimeStep()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FactorTotp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotp;

FactorTotp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotp;

FactorTotp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotp;

FactorTotp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotp;

FactorTotp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FactorTotp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FactorTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FactorTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FactorTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FactorTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput">clockDriftIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput">hmacAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput">otpLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput">sharedSecretEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput">timeStepInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval">clockDriftInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm">hmacAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength">otpLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep">timeStep</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clockDriftIntervalInput`<sup>Optional</sup> <a name="clockDriftIntervalInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput"></a>

```java
public java.lang.Number getClockDriftIntervalInput();
```

- *Type:* java.lang.Number

---

##### `hmacAlgorithmInput`<sup>Optional</sup> <a name="hmacAlgorithmInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput"></a>

```java
public java.lang.String getHmacAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `otpLengthInput`<sup>Optional</sup> <a name="otpLengthInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput"></a>

```java
public java.lang.Number getOtpLengthInput();
```

- *Type:* java.lang.Number

---

##### `sharedSecretEncodingInput`<sup>Optional</sup> <a name="sharedSecretEncodingInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput"></a>

```java
public java.lang.String getSharedSecretEncodingInput();
```

- *Type:* java.lang.String

---

##### `timeStepInput`<sup>Optional</sup> <a name="timeStepInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput"></a>

```java
public java.lang.Number getTimeStepInput();
```

- *Type:* java.lang.Number

---

##### `clockDriftInterval`<sup>Required</sup> <a name="clockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval"></a>

```java
public java.lang.Number getClockDriftInterval();
```

- *Type:* java.lang.Number

---

##### `hmacAlgorithm`<sup>Required</sup> <a name="hmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm"></a>

```java
public java.lang.String getHmacAlgorithm();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `otpLength`<sup>Required</sup> <a name="otpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength"></a>

```java
public java.lang.Number getOtpLength();
```

- *Type:* java.lang.Number

---

##### `sharedSecretEncoding`<sup>Required</sup> <a name="sharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding"></a>

```java
public java.lang.String getSharedSecretEncoding();
```

- *Type:* java.lang.String

---

##### `timeStep`<sup>Required</sup> <a name="timeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep"></a>

```java
public java.lang.Number getTimeStep();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FactorTotpConfig <a name="FactorTotpConfig" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.factor_totp.FactorTotpConfig;

FactorTotpConfig.builder()
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
    .name(java.lang.String)
//  .clockDriftInterval(java.lang.Number)
//  .hmacAlgorithm(java.lang.String)
//  .id(java.lang.String)
//  .otpLength(java.lang.Number)
//  .sharedSecretEncoding(java.lang.String)
//  .timeStep(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name">name</a></code> | <code>java.lang.String</code> | The TOTP name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval">clockDriftInterval</a></code> | <code>java.lang.Number</code> | Clock drift interval. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm">hmacAlgorithm</a></code> | <code>java.lang.String</code> | HMAC Algorithm. Valid values: `HMacSHA1`, `HMacSHA256`, `HMacSHA512`. Default is `HMacSHA512`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#id FactorTotp#id}. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength">otpLength</a></code> | <code>java.lang.Number</code> | Length of the password. Default is `6`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>java.lang.String</code> | Shared secret encoding. Valid values: `base32`, `base64`, `hexadecimal`. Default is `base32`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep">timeStep</a></code> | <code>java.lang.Number</code> | Time step in seconds. Valid values: `15`, `30`, `60`. Default is `15`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The TOTP name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#name FactorTotp#name}

---

##### `clockDriftInterval`<sup>Optional</sup> <a name="clockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval"></a>

```java
public java.lang.Number getClockDriftInterval();
```

- *Type:* java.lang.Number

Clock drift interval.

This setting allows you to build in tolerance for any drift between the token's current time and the server's current time. Valid values: `3`, `5`, `10`. Default is `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}

---

##### `hmacAlgorithm`<sup>Optional</sup> <a name="hmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm"></a>

```java
public java.lang.String getHmacAlgorithm();
```

- *Type:* java.lang.String

HMAC Algorithm. Valid values: `HMacSHA1`, `HMacSHA256`, `HMacSHA512`. Default is `HMacSHA512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#id FactorTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `otpLength`<sup>Optional</sup> <a name="otpLength" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength"></a>

```java
public java.lang.Number getOtpLength();
```

- *Type:* java.lang.Number

Length of the password. Default is `6`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#otp_length FactorTotp#otp_length}

---

##### `sharedSecretEncoding`<sup>Optional</sup> <a name="sharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding"></a>

```java
public java.lang.String getSharedSecretEncoding();
```

- *Type:* java.lang.String

Shared secret encoding. Valid values: `base32`, `base64`, `hexadecimal`. Default is `base32`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}

---

##### `timeStep`<sup>Optional</sup> <a name="timeStep" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep"></a>

```java
public java.lang.Number getTimeStep();
```

- *Type:* java.lang.Number

Time step in seconds. Valid values: `15`, `30`, `60`. Default is `15`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/factor_totp#time_step FactorTotp#time_step}

---



